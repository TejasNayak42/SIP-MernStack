const mongoose =require("mongoose0")

const userSchema = new mongoose.userSchema({
    email:{
        type:String,
        required:true,
        Unique:true
    },
    password:{
        type:String,
        required:true,
        Unique:true
    }
})

module.exports = new mongoose.model("user", userSchema)