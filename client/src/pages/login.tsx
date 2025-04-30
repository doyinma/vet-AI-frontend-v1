import React from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        // Redirect to the dashboard page
        router.push('/dashboard');
    };


    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <h1 className="text-xl font-bold text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Log In
                    </button>
                </form>
                <a href="/" className="text-blue-500 hover:text-blue-700 text-sm text-center block mt-4">
                    ← Back to homepage
                </a>
            </div>
        </div>
    );

};

export default LoginPage;
