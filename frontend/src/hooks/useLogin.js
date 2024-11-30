import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
 const useLogin=()=>{
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext()
    const login=async({userName,password})=>{
        console.log(userName,password);
        setLoading(true);
        const success= handleInputErrors({userName,password});
        if(!success){
            return ;
        }
        try {
            const res=await fetch('/api/auth/login',{
                method: "POST",
				headers: { "Content-Type": "application/json" },
                body:JSON.stringify({userName,password})
            })
            if(!res.ok){
                console.log('error in login part');
            }
            const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
            console.log("logged in succesfully");
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
        } catch (error) {
            console.log("error at the useLogin",error.message);
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,login}
}
export default useLogin;
function handleInputErrors({userName, password}) {
	
	if (!userName || !password ) {
		toast.error("Please fill in all fields");
		console.log('error');
		return false;
    }
	return true;
}