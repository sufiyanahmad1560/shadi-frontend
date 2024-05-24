import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { APP_ROUTES } from "../utils/constant";



const RequireAuth = () => {
    const location = useLocation();
    const { user } = useAuth();

    return (
        user ? <Outlet /> : <Navigate to={APP_ROUTES.LOGIN} state={{ from: location }} replace />
    )
}

export default RequireAuth;