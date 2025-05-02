import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Login = () => {

    const location = useLocation();

    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        navigate( location.state || '/')
    }
    
    return (
        <div className="hero bg-base-200 h-[calc(100dvh-81px)]">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-semibold pt-10'>Login Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleUser} className="fieldset">
                        <label className="label text-base text-[#282828] font-semibold">Email</label>
                        <input type="email" name='email' className="input mb-3" placeholder="Enter Your Email" />
                        <label className="label text-[#282828] text-base font-semibold">Password</label>
                        <input type="password" name='password' className="input" placeholder="Enter Your Password" />
                        <div><p className="link link-hover font-semibold text-accent">Forgot password?</p></div>
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                        <p className='pt-2 pb-4 font-semibold text-accent'>Don't have an account? <Link to='/auth/register' className='text-secondary hover:underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;