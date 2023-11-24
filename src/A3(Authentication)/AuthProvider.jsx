import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './Firebase.config';
import PropTypes from 'prop-types';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState()
    // Google log in 
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // create user 
    const createUser=(email,password)=>{
        setLoading(true)
     return   createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    setLoading(false)
    })
    return()=>{
        return  unSubscribe()
    }
   },[])

   const logOut=()=>{
    setLoading(true)
    return  signOut(auth)
   }

    const AuthInfo={googleLogin,createUser,user,logIn,loading,logOut}
    return (
        <AuthContext.Provider  value={AuthInfo}>
         {children}
        </AuthContext.Provider>
    )
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;
