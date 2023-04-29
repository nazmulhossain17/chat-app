import React from 'react';

const Chats = () => {
    return (
        <>
        <div className="p-5 flex items-center gap-10 text-white cursor-pointer hover:bg-yellow-700 bg-gray-800">
          <img className='h-8 w-8 rounded-full object-cover' src='https://www.helixstorm.com/wp-content/uploads/2020/08/10-Productivity-Tips-to-Help-You-Master-Microsoft-Office-365-.jpg' alt="" />
          <div className="userChatInfo">
            <span className='text-base font-medium'>Jane</span>
            <p className='text-sm text-gray-400'>Hello</p>
          </div>
        </div>
        </>
    );
};

export default Chats;