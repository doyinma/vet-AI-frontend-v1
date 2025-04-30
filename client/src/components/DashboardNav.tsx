import Link from 'next/link';

const DashboardNav = () => {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-indigo-600">
                            Vet Assistant
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex space-x-4">
                            <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Dashboard
                            </Link>
                            <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Settings
                            </Link>
                            <Link href="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Profile
                            </Link>
                            <Link href="/support" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Support
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav;
