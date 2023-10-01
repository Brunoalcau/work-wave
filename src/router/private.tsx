import { Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";


const RoutePrivate = () => {
    return [
        {
            path: "/", 
            element: <Dashboard />, 
         
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ];
};


export default RoutePrivate;