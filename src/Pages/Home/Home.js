import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chat from '../../Components/Chat/Chat';

const Home = () => {
    return (
        <>
            <div className='h-screen bg-purple-700 flex items-center justify-center'>
                <div className='flex border border-white rounded-lg w-3/5 h-4/5 overflow-hidden'>
                    <Sidebar/>
                    <Chat/>
                </div>
            </div>
        </>
    );
};

export default Home;