const mongoose = require('mongoose');

const connect = async()=>{

    return new Promise((resolve,reject)=>{

    mongoose.connect('mongodb://127.0.0.1:27017/KooApp')
        .then(res=>{
            
            resolve('Connected Mongo')
        })
        
    })
}


module.exports={connect};