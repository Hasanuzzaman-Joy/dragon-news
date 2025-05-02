import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext.jsx'
import auth from '../JS/firebase.config.js'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
 
    const[user,setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (userCredentials)=>{
            setUser(userCredentials);
        })

        return ()=> unsubscribe()
    },[])

    const getLoggedOut = () =>{
        return signOut(auth)
    }



    const userInfo = {
        createUser,
        signInUser,
        user,
        getLoggedOut
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;