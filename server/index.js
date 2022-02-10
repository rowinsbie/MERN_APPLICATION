

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const mongo = require('mongodb');
const app = express();
app.use(express.json());
app.use(cors());

// configuration
const dotenv = require('dotenv').config({path:"../.env"});

// Models
const UserModel = require('./models/User.Model');

// connect to mongoDB
mongoose.connect(process.env.MONGODBURL);


// API CALLS
app.get("/get-users",(req,res) => {
    UserModel.find({},(err,result) => {
        if(err)
        {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


app.post("/create-users",async(req,res) => {
    const input = req.body; // will get input submitted by the user

    const newUser = new UserModel({
        Name:input.Name,
        Email:input.Email,
        Password:bcrypt.hashSync(input.Password,14) // to secure passwod by hashing. hash is a one way encryption
    }); 
    
    // save the input to our mongoDB collection
    await newUser.save();

    res.json(newUser);
   
});

app.post("/delete-user",async(req,res) => {
    const userID = req.body.userID;
    try
    {
        const isExist = await UserModel.find({"_id":userID}).count() >= 1;
        if(isExist)
        {
            await UserModel.deleteOne({"_id":userID});
            res.json({"message":"User has been deleted"});

        } else {
            res.json({"message":"User does not exists"});
        }
     
      
    } catch(e)
    {
        res.json({"status":e});
    }

 
   
    
   
});

app.post("/process-login",async(req,res) => {
    const input = req.body; // will get the username and passsword of the user

    let username = input.Username;
    let password = input.Password;
    

});


app.listen(process.env.EXPRESS_SERVER_PORT,()=>{
    console.log("Server Started");
})