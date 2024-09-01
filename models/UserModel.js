const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    createdOn:{
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("User",userSchema);