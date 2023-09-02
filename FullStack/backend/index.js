const express =require("express")
const mongoose= require("mongoose")

const app= express()

//DB Connection
mongoose.connect("mongodb+srv://tejasnayakc42:CodeWithTejas69@cozyjudge.sbmitth.mongodb.net/SipretryWrites=true&w=majority").then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log('Error')
})

app.listen(3001,()=>{
    console.log("Server is connected to 3001")
})