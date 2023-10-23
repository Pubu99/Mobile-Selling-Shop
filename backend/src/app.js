require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError=require('http-errors')
const BuyerRouter =require('./routes/buyer')
const AdminRouter =require('./routes/admin')
const OrderRouter =require('./routes/order')
const fileUpload=require('express-fileupload');
const MobileRouter =require('./routes/mobile')
const cors = require('cors')
app.use(cors())
app.use(fileUpload());

app.use('uploads/mobiles',express.static('public/mobiles'))

app.use(express.json());

app.use('/api/v1/buyer', BuyerRouter);
app.use('/api/v1/admin', AdminRouter);
app.use('/api/v1/mobile', MobileRouter); 
app.use('/api/v1/order', OrderRouter);

const corsOparation ={
    origin:"http://localhost:3000",
    Credential:true,
    optionSuccessStatus:20
}
app.use(cors(corsOparation))





app.use((err,req,res,next)=>{
    if (createHttpError.isHttpError(err)){
        res.status(err.status).send({message:err.message});
    }else{
        res.status(500).send({message:err.message});
    }
    //error unknown
    res.status(500).send({message:"Error Unknown"})
    
});


module.exports = app;
