const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

// configuration
const config = require('config');

// Models
const UserModel = require('./models/User.Model');

// connect to mongoDB
mongoose.connect(config.get('database.mongoDBURL'));


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

app.post("/process-login",async(req,res) => {
    const input = req.body; // will get the username and passsword of the user

    let username = input.Username;
    let password = input.Password;
    

});


app.listen(3001,()=>{
    console.log("Server Started");
})