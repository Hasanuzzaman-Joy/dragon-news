import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import userImg from '../../assets/user.png'
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {

    const { user, getLoggedOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const logOut = () => {
        getLoggedOut()
        navigate('/auth/login')
    }

    return (
        <div className='w-11/12 mx-auto flex justify-between items-center py-5'>
            <div className=""></div>
            <div className="flex gap-5 text-accent ml-44">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>News</NavLink>
            </div>
            <div className="flex gap-3">
                {
                    user ?
                        <>
                            <img src={user?.photoURL} alt="" className='w-[40px] h-[40px] rounded-[100%]' />
                            <button onClick={logOut} className="btn btn-primary rounded-none border-none px-10">Logout</button>
                        </> :
                        <>
                            <img src={userImg} alt="" />
                            <button onClick={() => navigate('/auth/login')} className="btn btn-primary rounded-none border-none px-10">Login</button>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;