const DashboardFooter = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Vet Assistant App. All rights reserved.</p>
                </div>
                <div>
                    <p className="text-sm">Made with <span className="text-red-500">&hearts;</span> by Ola & Vishal</p>
                </div>
                <div>
                    <p className="text-sm">
                        <a href="/about-us" className="hover:text-gray-300">About Us</a> |
                        <a href="/privacy-policy" className="hover:text-gray-300">&nbsp;Privacy Policy&nbsp;</a> |
                        <a href="/terms-of-service" className="hover:text-gray-300">&nbsp;Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default DashboardFooter;
