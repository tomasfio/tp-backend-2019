const mongoose = require('mongoose');

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/node-restapi');
        console.log("Db is connected");
    }
    catch(e){
        console.log(e);
    }
}