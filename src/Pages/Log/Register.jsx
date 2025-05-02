import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../JS/firebase.config'

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const registerUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-semibold pt-10'>Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={registerUser} className="fieldset">
                        <label className="label text-base text-[#282828] font-semibold">Name</label>
                        <input type="text" className="input mb-3" name='name' placeholder="Enter Your Name" />

                        <label className="label text-base text-[#282828] font-semibold">Photo URL</label>
                        <input type="text" className="input mb-3" name='photo' placeholder="Enter Your Photo URL" />

                        <label className="label text-base text-[#282828] font-semibold">Email</label>
                        <input type="email" className="input mb-3" name='email' placeholder="Email" />

                        <label className="label text-[#282828] text-base font-semibold">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />

                        <button className="btn btn-primary mt-4">Register</button>
                        <p className='pt-2 pb-4 font-semibold text-accent'>Already have an account? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;