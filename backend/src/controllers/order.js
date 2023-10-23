const createHttpError=require('http-errors')
const bcrypt= require('bcrypt');
const OrderModel=require('../model/order')

exports.create =async (req, res,next)=>{
    const{
        buyer,
        mobile,
        quantity,
        description,
        address
    }=req.body;
    
    try{
        const{pdf}=req.files;
        if(!pdf){
            throw createHttpError(404, "pdf not found")
        };
       
        let filepath = __dirname + '../../../public/pdfs/' + pdf.name
        pdf.mv(filepath);

        let filepathtoUpload ='/public/pdfs/' + pdf.name

        if(!buyer|| !mobile|| !quantity || !description || !address){
            throw createHttpError(400, 'Please provide all the required fields');   
        } 

        const buyerId=mongoose.Types.ObjectId(buyer);
        const mobileId=mongoose.Types.Object(product);

        const order =new OrderModel({
            buyer:buyerId,
            mobile:mobileId,
            quantity,
            total:Quantity*mobile.price,
            date:Date.now(),
            orderstatus:'pending',
            file:filepathtoUpload,
            description,
            address
        });

        const result =await order.save();
        res.status(201).send(result);


    }catch(error){
        next(error);

    }

    
}

exports.getOrderByAdmin =async(req, res,next)=>{
    const adminId=req.params.id;
    try{
        const orders= await OrderModel.find({admin:adminId}).populate('buyer').populate('mobile').exec();
        res.send(orders);

    }catch(error){
        next(error)
    }
}

exports.getOrderByBuyer =async(req, res,next)=>{
    const buyerId=req.params.id;
    try{
        const orders= await OrderModel.find({buyer:buyerId}).populate('buyer').populate('mobile').exec();
        res.send(orders);

    }catch(error){
        next(error)
    }
}