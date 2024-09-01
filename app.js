const express = require('express')
const cors = require('cors')
const app = express();
const userRouter = require("./routes/user.route")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/api/users", userRouter)


app.get("/",(req,res)=>{
    res.sendFile( __dirname+"/./views/index.html")
})



//invalid api request 
app.use((req,res,next )=>{
    res.status(404).json({
        message:"route not found"
    })
})

//server site error
app.use((err,req,res,next )=>{
    res.status(500).json({
        message:"there ia a server site error"
    })
})



module.exports=app;