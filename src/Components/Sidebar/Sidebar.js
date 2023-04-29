import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import Chats from '../Chats/Chats';

const Sidebar = () => {
    return (
        <>
        
            <div className=' bg-gray-500'>
            <Navbar/>
            <Search/>
            <Chats/>
                <p>Sidebar</p>
            </div>
        </>
    );
};

export default Sidebar;