import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerificated: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model("user", Schema)

export default UserModel