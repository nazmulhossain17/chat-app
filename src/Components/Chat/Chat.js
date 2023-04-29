import React from 'react';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

const Chat = () => {
    return (
        <>
            <div className='flex-1'>
            <div className="p-5 flex items-center gap-3 text-white cursor-pointer bg-gray-800">
          <img className='h-8 w-8 rounded-full object-cover' src='https://www.helixstorm.com/wp-content/uploads/2020/08/10-Productivity-Tips-to-Help-You-Master-Microsoft-Office-365-.jpg' alt="" />
          <span className=''>Jane</span>
           
        </div>
        <Messages/>
        <Input/>
            </div>
            
        </>
    );
};

export default Chat;