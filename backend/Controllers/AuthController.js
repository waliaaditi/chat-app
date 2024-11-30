import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
const loginUser = async (req, res) => {
    try {
        console.log("i am at login page");
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Call generateTokenAndSetCookie and return after that
        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.userName,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log(`error in the login user ${error.message}`);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const signupUser=async(req,res)=>{
    try {
        console.log(req.body);
        const {fullName,userName,password,confirmPassword,gender}=req.body
        if(password!=confirmPassword){
            return res.status(400).json({ error: "Passwords don't match" });
        }
        const user=await User.findOne({userName})
        if(user){
            return res.send(400).json({error:'User Already Exists'})
        }
        const salt=await bcrypt.genSalt(20)
        const hashedPassword=await bcrypt.hash(password,salt)
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			// generate token and set Cookie
			generateTokenAndSetCookie(newUser._id, res)
			await newUser.save();
            console.log("new User created successfully");
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				userName: newUser.userName,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
    } catch (error) {
        console.log(`error in the signUp user ${error.message}`);
        res.status(500).json({'error in signup user':error.message})
    }
}
const logoutUser=async(req,res)=>{
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
export {loginUser,signupUser,logoutUser}