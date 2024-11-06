import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ClimbingBoxLoader } from "react-spinners";

const PublicRoute = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#0D0D0D]">
                <ClimbingBoxLoader color="#ffffff" size={ 15 } />
            </div>
        );
    }

    return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
