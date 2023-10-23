const bcrypt =require('bcrypt');
const MobileModel =require('../model/mobile')
const mongoose =require('mongoose')
const createHttpError = require('http-errors')

exports.create =async (req, res, next)=>{
    console.log(req.body)
    const{
        name,
        price,
        image,
    }=req.body;
    console.log(req.body)
    try{
        /* const{image}=req.files;
        if(!image){
            throw createHttpError(404, "Image not found")
        };
        if(!image.mimetype.startWidth('image')){
            throw createHttpError(400, "Only Image are allowed ")
        }
        let filepath = __dirname + '../../../public/mobiles/' + image.name
        image.mv(filepath);

        let filepathtoUpload ='/public/mobiles/' + image.name

        if(!name|| !description|| !price || !mobileName){
            throw createHttpError(400, 'Please provide all the required fields');   
        }  
        
 */
        const mobile =new MobileModel({
            name,
            price,
            image,
        })

        const result = await mobile.save();
        res.status(201).send(result);


    }catch(error){
        next(error);

    }
    
}

exports.update = async (req, res, next)=>{
    const mobileId =req.params.id;

    const{
        name,
        image,
        price
    }= req.body;

    try{
        if(!mongoose.isValidObjectId(mobileId)){
            throw createHttpError(400, "Invalid Id")
        }
        /* if(!name|| !description|| !price || !mobileName){
            throw createHttpError(400, 'Please provide all the required fields');   
        }

        const{image}=req.files;
        let filepath
        let filepathtoUpload;

        if(image){
            if(!image.mimetype.startWidth('image')){
                throw createHttpError(400, 'Only image are allowed');
            }
            filepath=__dirname +'../../../public/mobiles/'+image.name
            image.mv(filepath);
            filepathtoUpload='/public/mobiles/'+ image.name
        };
 */
        const mobile =await MobileModel.findById(mobileId).exec();

        if(!mobile){
            throw createHttpError(404, 'mobile not found');
        }

        mobile.name=name;
        
        mobile.price=price;

        mobile.image = image;
        

        /* if(image){
            mobile.image=filepathtoUpload;
        } */
        const result =await mobile.save();
        res.status(200).send(result);

    }catch(error){
        next(error)
    }

}

exports.delete =async (req, res, next)=>{
    const mobileId =req.params.id;
    try{
        if(!mongoose.isValidObjectId(mobileId)){
            throw createHttpError(400,"Incalid Id")
        }
        const result =await MobileModel.findByIdAndDelete(mobileId).exec();

        if(!result){
            throw createHttpError(404, 'mobile not found');
        }
        res.status(200).send(result);
    } catch(error){
        next(error)
    }

}

exports.getAll= async(req, res, next)=>{
    try{
        const result =await MobileModel.find().exec();
        res.status(200).send(result);
    }catch(error){
        next(error)
    }
} 

exports.getOne =async(req, res,next)=>{
    console.log(req);
    const Id=req.params.id;
    console.log(Id);
    try{
        if(!mongoose.isValidObjectId(Id)){
            throw createHttpError(400, "Invalid Id")
        }

        const result = await MobileModel.findById(Id).exec();

        if(!result){
            throw createHttpError(404, "mobile not found");

        }
        res.status(200).send(result);
    }catch(error){
        next(error)
    }
}

exports.search = async(req,res, next)=>{
    const query=req.query.q;
    try{
        if(!query){
            throw createHttpError(400, "Please provide a search query")
        
        }

        const result = await MobileModel.find({name:{$regex:query, $options:'i'}}).exec();
         if(!result){
            throw createHttpError(404, 'mobile is not found');
         }

         res.status(200).send(result);
    }catch(error){
        next(error)
    }
}