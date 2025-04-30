import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                            Vet Assistant App
                        </h2>
                    </div>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="/contact" className="py-2 px-4 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-200">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Facebook</span>
                            <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; {new Date().getFullYear()} Vet Assistant App, Inc. All rights reserved.
                        </p>
                        <p className="text-center text-base text-gray-400">
                            <a href="/about-us" className="hover:text-gray-300">About Us</a> |
                            <a href="/privacy-policy" className="hover:text-gray-300">&nbsp;Privacy Policy&nbsp;</a> |
                            <a href="/terms-of-service" className="hover:text-gray-300">&nbsp;Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
