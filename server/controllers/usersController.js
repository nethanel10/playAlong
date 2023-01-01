import User from "../db/models/user.js";
import { sendVerificationEmail } from "./emailsController.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    const {username, password, email} = req.body
    try {
        //create user with hased password
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        })
        const savedUser = await newUser.save()

        //send verification email
        sendVerificationEmail(email, savedUser._id)
        //return success
        return res.status(200).json({
            user: savedUser,
            feedback: "please check your email inbox to verificate the user"
        })
    }
    catch(err) {
        return res.status(500).send(err)
    }

}

const signin = async (req, res) => {
    const {username, password} = req.body
    try {
        //check if the user exist and match passwords
        const isExist = await User.findOne({username})
        console.log(isExist)
        if(!isExist) return res.status(400).send("username or password is incorrect.")
        const passwordMatch = await bcrypt.compare(password, isExist.password)
        if(!passwordMatch) return res.status(400).send("username or password is incorrect.")

        //check if verificated
        if(!isExist.isVerificated) return res.status(400).send("user is not verificated. please check your email")
        //generate jwt
        const userJwt = jwt.sign({id: isExist._id}, "playAlongSecret")
        
        //send user details and token
        return res.status(200).json({
            user: isExist,
            token: userJwt
        })
    }
    catch(err) {
        return res.status(500).send(err)
    }
}

const verificate = async (req, res) => {
    const {id} = req.params
    try {
        //update the user status to verificated
        const updatedUser = await User.updateOne({_id: id}, {isVerificated: true})

        //return feedback
        return res.status(200).send('User verificated suucessfuly ! sign in now.')
    }
    catch(err) {
        return res.status(500).send(err)
    }
    
}

const getUserDetails = async (req, res) => res.status(200).json(req.user)

export {getUserDetails, verificate, signin, signup}