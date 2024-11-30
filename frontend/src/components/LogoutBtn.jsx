import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import useLogout from '../hooks/useLogout';
function LogoutBtn() {
  const { loading, logout } = useLogout();
  return (
    <div  className='mt-auto'>
      {
        loading?(
          <span className='loading loading-spinner'></span>
        ):(
          <IoIosLogOut className='w-6 h-6 text-white cursor-pointer ' onClick={logout} />
        )
      }
    </div>
  )
}

export default LogoutBtn