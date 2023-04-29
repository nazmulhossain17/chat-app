import React from 'react';

const Search = () => {
    return (
        <>
           <div className="border-b-2 border-gray-400">
      <div className="searchForm">
        <input
        className='bg-transparent border-none text-white outline-none'
          type="text"
          placeholder="Find a user"
          
        />
      </div>
      {/* {err && <span>User not found!</span>}
      {user && ( */}
        <div className="p-5 flex items-center gap-10 text-white cursor-pointer hover:bg-yellow-700 bg-red-500">
          <img className='h-8 w-8 rounded-full object-cover' src='https://www.helixstorm.com/wp-content/uploads/2020/08/10-Productivity-Tips-to-Help-You-Master-Microsoft-Office-365-.jpg' alt="" />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      {/* )} */}
    </div>
        </>
    );
};

export default Search;