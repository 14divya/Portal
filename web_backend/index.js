var express = require('express');
var bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const approvedProductRouter = require('./routes/approvedProductRoute');
var cors = require('cors');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });


app.use(cors());

app.use(express.static('/home/divya/'))

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/approved',approvedProductRouter);

// app.listen(40722,()=>{
//     console.log('Server is running at port 40722 (mobile net)');
// });

// app.listen(3000,()=>{
//     console.log('Server is running at port 3000 (localhost)');
// });

app.listen(42342,()=>{
    console.log('Server is running at port 42342 (wifi-pg)');
});