import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const handleSignUp = () => {
        router.push('/signup');
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center">
                            <Link className="text-xl font-bold text-indigo-600" href="/">
                                Vet Assistant
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link className="border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="/services">
                                Services
                            </Link>
                            <Link className="border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="/about">
                                About
                            </Link>
                            <Link className="border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-gray-700 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                            Status
                        </a>
                        <a href="/login" className="text-gray-700 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </a>
                        <button onClick={handleSignUp} className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
