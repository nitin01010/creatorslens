import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Google from '../../assite/google.png';

const Signup = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center py-[180px] bg-[#0D0D0D]">
            <div className="shadow-lg bg-black m-3 -mt-20 rounded-lg p-10 max-w-md w-full text-white">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={ Google } // Replace with your logo URL or remove if not needed
                        alt="Logo"
                        className="w-16 h-16 mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                    <p className="text-gray-400">Sign in to your account to continue</p>
                </div>

                <button
                    onClick={ () => loginWithRedirect() }
                    className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200 mb-6 shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
                        <path fill="#4285F4" d="M47.9 24.4c0-1.7-.2-3.4-.5-5H24v9.5h13.4c-.6 3.1-2.4 5.7-5 7.4v6.2h8c4.7-4.3 7.5-10.6 7.5-17.7z" />
                        <path fill="#34A853" d="M24 48c6.7 0 12.4-2.2 16.5-5.9l-8-6.2c-2.4 1.6-5.4 2.5-8.5 2.5-6.5 0-12-4.4-14-10.4H1.5v6.5C5.6 41.3 14 48 24 48z" />
                        <path fill="#FBBC05" d="M9.9 28.6c-.6-1.6-1-3.4-1-5.2s.4-3.6 1-5.2V11.7H1.5c-2 3.6-3.1 7.7-3.1 12.2s1.1 8.6 3.1 12.2l8.4-6.5z" />
                        <path fill="#EA4335" d="M24 9.5c3.6 0 6.9 1.3 9.5 3.8l7-7C35.8 1.3 30.1 0 24 0 14 0 5.6 6.7 1.5 16.5l8.4 6.5c2-6 7.5-10.4 14.1-10.4z" />
                    </svg>
                    Sign in with Google
                </button>

                <div className="text-center text-gray-400">
                    <p className="mt-4">
                        Already have an account?{ " " }
                        <button
                            onClick={ () => navigate('/login') }
                            className="text-blue-500 hover:underline"
                        >
                            Log in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
