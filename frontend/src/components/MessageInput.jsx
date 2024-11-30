import React,{useState} from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../hooks/useSendMessage';
function MessageInput() {
	const {loading,sendMessage}=useSendMessage()
	const [message, setMessage] = useState("");
	const handleSubmit=(e)=>{
		e.preventDefault();
		sendMessage(message)
		setMessage("")
	}
  return (
    <form className='px-4 my-3'>
 			<div className='w-full flex items-center relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>{setMessage(e.target.value)}}
				/>
				<button type='submit' className='mx-4 absolute inset-y-0 end-0 flex items-center pe-3' onClick={handleSubmit}>
				{loading ? <div className='loading loading-spinner'></div> :<IoMdSend size={"2rem"} /> }
					
				</button>
			</div>
 		</form>
  ) 
}

export default MessageInput