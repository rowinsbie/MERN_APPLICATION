const mongoose = require('mongoose');


const Post = new mongoose.Schema({
    contents:{
        type:String,
        maxlength:300,
        required:true
    },
    userID:[
       {
        type:Schema.ObjectId,
        ref:"users",
       }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose('post',Post);