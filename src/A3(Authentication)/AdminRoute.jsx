import { Navigate } from "react-router-dom";
import useAdmin from "../A4(Hooks)/useAdmin";
import useAuth from "../A4(Hooks)/useAuth";
import { PropTypes } from 'prop-types';


const AdminRoute = ({children}) => {
    const {user,loading}=useAuth()
    const [isAdmin,adminLoading]=useAdmin()
    if(loading || adminLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(!user?.email || !isAdmin){
        return <Navigate to="/login" />;  
    }
    return children
};
AdminRoute.propTypes={
    children :PropTypes.node
   }

export default AdminRoute;