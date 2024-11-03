const Footer = () => {
    return (
        <footer className="bg-black shadow">
            <div className="max-w-6xl mx-auto py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm text-center sm:text-left">
                    © { new Date().getFullYear() } Your Company. All rights reserved.
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
                    <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition duration-200">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-blue-400 transition duration-200">Terms of Service</a>
                    <a href="/contact" className="text-gray-400 hover:text-blue-400 transition duration-200">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
