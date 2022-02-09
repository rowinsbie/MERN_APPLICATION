// Import the mongoose 
const mongoose = require('mongoose');

// Create a schema
const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    }
});

const UserModel = mongoose.model("users",UserSchema);

module.exports  = UserModel;