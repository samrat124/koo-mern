require('dotenv').config();
const User = require("../database/user")
const bcrypt = require('bcrypt');

const axios = require('axios');
const  {generateToken}  = require("../CommonFunction/CommonFunction");

const signUp =async(body)=>{
    // console.log(body);
    let user =await User.findOne({email:body.email});
    if(user){
        throw new Error('Email Already Registered');
    }
    // const salt= 10;
    // body.password = bcrypt.hashSync(body.password,salt);
    let newUser = await User.create(body);
    newUser.authType="normal"
    return "Sucessfully Sign Up";

}

const login=async(body)=>{

    let user = await User.findOne({email:body.email});
    if(!user){
        throw new Error('User Not Found');
    }

    // let password= bcrypt.compareSync(body.password,user.password);
    // if(!password){

    //     throw new Error('Incorrect Password');

    // }
    return generateToken(user.toJSON());
}
module.exports = {signUp,login}