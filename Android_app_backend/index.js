var express = require('express');
var bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const approvedProductRouter = require('./routes/approvedProductRoute');

var app = express();

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