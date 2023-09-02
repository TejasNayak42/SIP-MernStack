const User = require("../models/userModel")
const {isValid, isValidBody} = require("./validator")
const createUser = async(req,res)=>{
    try{
        let{email, password}=req.body

        if(!isValidBody(req.body)){
            return res.status(400).send({msg:"No data Provided"})

        }
        if(!isValid(email)){
            return res.status(400).send({msg:"Enter email"})

        }

        let mactchedEmail = await User.findOne({email})
        if(mactchedEmail){
            return res.status(500).send("eXISTS")

        }

        if(!isValid(password)){
            return res.status(400).send({msg:"Enter [PASSWORD"})

        }

        let registerUser = await User.create({email, password})
        return res.status(201).send({
            status:true,
            msg:"User refiistered Successfully",
            data:registerUser
        })
    }catch(error){
        return res.status(500).send("Internal Server Error")
    }

    module.exports={createUser}
}