import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const RightSidePart = () => {
    return (
        <div className='flex gap-4 flex-col sticky top-5'>
            <h1 className='text-lg font-semibold text-[#000000]'> Login With</h1>
            <button className='btn btn-outline btn-secondary'><FcGoogle /> Login with Google</button>
            <button className='btn btn-outline btn-primary'><FaGithub /> Login with Github</button>
        </div>
    );
};

export default RightSidePart;