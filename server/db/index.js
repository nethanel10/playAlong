import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://netanelbedok:100100@cluster0.oxfattj.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err) return console.error(err)
    return console.log("DB connected")
})

export default connection