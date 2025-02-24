import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();



    if(loading){
        return <span className="loading loading-bars loading-lg "></span>
    }
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/' }></Navigate>
    }
    
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoute;