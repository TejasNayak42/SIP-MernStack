const express=require("express")
const mongoose= require("mongoose")
const app=express()

//Test API
app.get("/ABC",(req,res)=>{
    res.send("175 is great always")
})

//DataBase Connection
mongoose.connect("mongodb+srv://tejasnayakc42:CodeWithTejas69@cozyjudge.sbmitth.mongodb.net/Sip")
.then(()=>{
    console.log("MongoDB is successfully connected")
})
.catch((err)=>{
    console.log("Error")
})


let db=mongoose.connection
//Create API
app.post("/data",(req,res)=>{
    let data={
        Name:"Deesh",
        USN:"4SF22CS?",
        Grade:"ab"
    }
    db.collection("Sip").insertOne(data,(data,err)=>{
        if(data){
            console.log("Data Inserted Successfully")
        }else{
            console.log(Error)
        }

    })
})


app.listen(6969,()=>{
    console.log("Server is running ...")
});