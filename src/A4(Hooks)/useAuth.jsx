import { AuthContext } from "../A3(Authentication)/AuthProvider";
import { useContext } from "react";



const useAuth = () => {
   const auth=useContext(AuthContext)
   return auth
};

export default useAuth;