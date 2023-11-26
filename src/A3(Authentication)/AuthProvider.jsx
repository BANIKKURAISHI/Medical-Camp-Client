import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './Firebase.config';
import PropTypes from 'prop-types';
import useAxiosPublic from "../A4(Hooks)/useAxiosPublic";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const axiosPublic=useAxiosPublic()
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
    if(currentUser){
      axiosPublic.post('/jwt',{email:currentUser?.email})
      .then(res=>{
        if(res?.data?.token){
            localStorage.setItem('access-token',res?.data?.token)
            setLoading(false)
        }

       
      })
    }
      else{
        localStorage.removeItem('access-token')
        setLoading(false)
    }
})
    return()=>{
        return  unSubscribe()
    }
   },[axiosPublic])

   const logOut=()=>{
    setLoading(true)
    return  signOut(auth)
   }

   const updateProfileButton=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name ,photoUrl:photo
    })
   }

    const AuthInfo={googleLogin,createUser,user,logIn,loading,logOut,updateProfileButton}
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
