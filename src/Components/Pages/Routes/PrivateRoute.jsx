import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(user);
    }, [user]);  // Only depend on 'user' to update 'data'

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (data) {
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
