import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { createContext, useState } from "react";
import auth from './Firebase.config';
import PropTypes from 'prop-types';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    
    const [loading,setLoading]=useState(true)
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }


    const AuthInfo={googleLogin,loading}
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
