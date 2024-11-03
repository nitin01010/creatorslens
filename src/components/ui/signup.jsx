import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
    const { loginWithRedirect } = useAuth0();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex items-center h-screen justify-center  bg-gradient-to-r ">
            <div className=" p-8 m-2  w-96">
                <h2 className="text-2xl font-bold text-center text-black mb-6">Create Account</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={ formData.username }
                            onChange={ handleChange }
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={ formData.email }
                            onChange={ handleChange }
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={ formData.password }
                            onChange={ handleChange }
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200 mb-4"
                    >
                        Sign Up
                    </button>
                </form>
                <button
                    onClick={ () => loginWithRedirect() }
                    className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition duration-200"
                >
                    Login with Google
                </button>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
