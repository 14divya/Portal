const { default: mongoose } = require('mongoose');

var url = 'mongodb://127.0.0.1:27017/eapl_web';

const dbConnect = () =>{
    try{
        mongoose.connect(url);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database error");
    }
}

module.exports = dbConnect;




