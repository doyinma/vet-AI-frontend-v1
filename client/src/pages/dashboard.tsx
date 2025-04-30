import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();

    // useEffect(() => {
    //     // Check if the user is logged in, if not redirect to login page
    //     const token = sessionStorage.getItem('userToken'); 
    //     if (!token) {
    //         router.push('/login');
    //     }
    // }, [router]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold text-center mb-4">Dashboard</h1>
            <div>
                <button
                    onClick={() => router.push('/chat')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Start Chatting
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
