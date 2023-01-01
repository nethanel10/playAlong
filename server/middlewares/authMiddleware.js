import jwt from 'jsonwebtoken'
import UserModel from '../db/models/user'

const authMiddleware = async (req, res, next) => {
    const token = req.headers['auth-token']
    const decoded = jwt.decode(token, "playAlongSecret")
    const isExist = await UserModel.findOne({_id: decoded.id})
    if(!isExist) return res.status(400).send("access denied")
    req.user = isExist
    next()
}

export default authMiddleware