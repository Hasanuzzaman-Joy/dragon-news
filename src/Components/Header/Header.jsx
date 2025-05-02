import React from 'react';
import { format } from 'date-fns';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-5'>
            <img src={logo} alt="" />
            <h3 className='text-base text-accent font-normal mt-4 mb-2'>Journalism Without Fear or Favour</h3>
            <h4 className='text-base text-accent font-normal'>{format(new Date(),('EEEE, dd	MMMM, uuuu'))}</h4>
        </div>
    );
};

export default Header;