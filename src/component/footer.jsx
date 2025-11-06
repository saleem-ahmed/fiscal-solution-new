import { useNavigate } from "react-router";

useNavigate
const Footer = () => {
    const navigateTo = useNavigate();
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Fiscal International Services</h3>
                        <p className="text-gray-400">Your trusted partner for financial clarity and business growth.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <button onClick={() => navigateTo('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                            <button onClick={() => navigateTo('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                            <button onClick={() => navigateTo('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                            <button onClick={() => navigateTo('team')} className="block text-gray-400 hover:text-white transition-colors">Our Team</button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>Bookkeeping</p>
                            <p>Tax Planning</p>
                            <p>Financial Reporting</p>
                            <p>Payroll Services</p>
                            <p>Business Advisory</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>fiscalsolutions45@gmail.com</p>
                            <p>www.fiscalinternationalservices.com</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>© 2024 Fiscal International Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;