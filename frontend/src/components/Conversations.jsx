import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../hooks/useGetConversation'
import { getRandomEmoji } from '../utils/emojis';

function Conversations() {
  const {loading,conversations}=useGetConversation()
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto '> 
    {conversations &&  conversations.map((converation,idx)=>(
      <Conversation key={converation._id} 
      conversation={converation} 
      emoji={getRandomEmoji()} 
      lastIdx={idx === conversations.length - 1} />
    ))}
      {loading?<span className='loading loading-spinner mx-auto' />:null}
    </div>
  )
}

export default Conversations