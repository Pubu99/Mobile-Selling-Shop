const mongoose=require("mongoose");
const Schema =mongoose.Schema;

const mobileSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    mobileName:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
   
    }
});

const Mobile =mongoose.model('Mobile',mobileSchema);

module.exports=Mobile;