import React, { useState } from 'react';
import GenderCheckbox from '../components/GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { useAuthContext } from '../context/AuthContext';

function SignupPage() {
    const { loading, signup } = useSignup();
    const {authUser}=useAuthContext()
    console.log(authUser);
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hii');
        signup(inputs);
        // setInputs({fullName:"",userName:"",gender:"",password:"",confirmPassword:""})
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-500'>
                    SignUp <span className='text-blue-500'> Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>UserName:</span>
                        </label>
                        <input
                            type='text'
                            name='userName'
                            placeholder='Enter UserName'
                            className='w-full input input-bordered h-10'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>FullName:</span>
                        </label>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='Enter FullName'
                            className='w-full input input-bordered h-10'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password:</span>
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password:</span>
                        </label>
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            onChange={handleChange}
                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link
                        to='/login'
                        className='text-sm text-blue-500 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>
                    <div>
                        <button
                            onClick={handleSubmit}
                            className='btn btn-block btn-sm mt-5 mb-5'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
