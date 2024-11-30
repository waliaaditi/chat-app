import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

function SideBar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col '>
        <SearchInput/>
        <div className='h-1 bg-slate-500 w-full'></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default SideBar