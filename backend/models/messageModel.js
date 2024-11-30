import mongoose from "mongoose";
const messgaeSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})
const Message=mongoose.model('Message',messgaeSchema);
export default Message