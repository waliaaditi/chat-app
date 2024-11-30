import User from "../models/userModel.js";

const  getUsersForSidebar=async(req,res)=>{
    try {
        // console.log('i am at getUserForSidebar');
        const loggedInUserId = req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select('-password')
        // console.log(filteredUsers);
        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log(`error in getUserForSidebar ${error.message}`);
        res.status(500).json({error:"Internal server error"})
    }
}
export default getUsersForSidebar;