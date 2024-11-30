import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import useConversation from '../zustand/useConversation';
import useGetConversation from '../hooks/useGetConversation';
function SearchInput() {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversation()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search){
      return 
    }
    if(search.length<3){
      return toast.error("length of search should be more than 3")
    }
    const conversation=conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }
    else{
      return toast.error("No such User Found")
    }
  }
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...'  value={search} onChange={(e)=>{setSearch(e.target.value)}}
        className='input input-bordered rounded-full' />
        <button type='submit' onClick={handleSubmit} 
        className=' w-12 h-8 btn btn-circle bg-sky-500 text-white'><FaSearch/></button>
    </form>
  )
}

export default SearchInput