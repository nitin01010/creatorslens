import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (isAuthenticated && user) {
            setUserData(user);
        }
    }, [isAuthenticated, user]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl font-semibold text-gray-600">Loading user data...</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="flex flex-col items-center p-8 w-full max-w-md mx-4 md:mx-auto rounded-lg shadow-lg bg-white border border-gray-200 sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] transition-shadow duration-300 hover:shadow-xl">
                { isAuthenticated && userData ? (
                    <div className="flex flex-col items-center w-full text-center">
                        <div className="relative w-32 h-32 rounded-full mb-6 shadow-inner">
                            <img
                                src={ userData.picture || FaUserCircle }
                                alt="User Profile"
                                className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                            { userData.name }
                        </h3>
                        <p className="text-gray-500 text-lg flex items-center justify-center gap-2">
                            <FiMail size={ 18 } /> { userData.email }
                        </p>
                        <button
                            className="mt-8 px-6 py-3 bg-indigo-500 text-white font-medium rounded-full shadow-md hover:bg-indigo-600 transition duration-300 w-full max-w-xs"
                            onClick={ () => logout({ returnTo: window.location.origin }) }
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="text-lg text-gray-700">No user data found. Please log in.</p>
                ) }
            </div>
        </div>
    );
};

export default UserProfile;
