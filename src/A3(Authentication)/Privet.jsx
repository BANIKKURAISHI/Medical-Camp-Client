
import { PropTypes } from 'prop-types';
import useAuth from '../A4(Hooks)/useAuth';
import { Navigate } from 'react-router-dom';

const Privet = ({children}) => {
    const {user,loading}=useAuth()
    
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(!user?.email){
        return <Navigate to="/login" />;  
    }
    return children
};

Privet.propTypes={
    children :PropTypes.node
   }

export default Privet ;