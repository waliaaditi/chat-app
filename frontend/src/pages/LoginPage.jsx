import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

function LoginPage() {
    const {loading,login}=useLogin()
    const navigate=useNavigate()
    const [inputs,setInputs]=useState({
        userName:"",
        password:"",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("i am at handle submit of login page");
        login(inputs)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0 '>
            <h1 className='text-3xl font-semibold text-center text-gray-500 '>
                Login 
                <span className='text-blue-500'> Chat App</span>
            </h1>
            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text '>UserName:</span>
                    </label>
                    <input type='text' name='userName' 
                    placeholder='Enter UserName' className='w-full input input-bordered h-10 ' onChange={handleChange}/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text '>Password:</span>
                    </label>
                    <input name='password' type='password' placeholder='Enter Password' className='w-full input input-bordered h-10 ' onChange={handleChange}/>
                </div>
                <a onClick={()=>{navigate('/signup')}} className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
				</a>
                <div>
					<button className='btn btn-block btn-sm mt-5 mb-5' disabled={loading} onClick={handleSubmit}>
						{loading ? <span className='loading loading-spinner '></span> : "Login"}
					</button>
				</div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage