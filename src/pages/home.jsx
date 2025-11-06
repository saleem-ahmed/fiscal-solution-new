import { CheckCircle, TrendingUp, Clock, Users, Shield, Award, ArrowRight, LineChart, Briefcase, Wallet, Calculator, FileSpreadsheet, BarChart3, PiggyBank } from "lucide-react";
import Img1 from "../assets/image1.png"

const benefits = [
    { icon: <TrendingUp className="w-8 h-8 text-white" />, title: 'Tailored Solutions', description: 'Customized for your business needs' },
    { icon: <Users className="w-8 h-8 text-white" />, title: 'Experienced Team', description: 'Experts across multiple domains' },
    { icon: <Clock className="w-8 h-8 text-white" />, title: 'Timely & Responsive', description: 'We deliver on schedule' },
    { icon: <Shield className="w-8 h-8 text-white" />, title: 'Data Security', description: 'Strict confidentiality protection' },
    { icon: <Award className="w-8 h-8 text-white" />, title: 'Transparent Fees', description: 'No hidden costs' }
];

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            {/* <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Your Financial Clarity. Our Expertise.
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-white/90">
                            We help businesses stay financially organized, compliant, and ready for growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                'Accurate bookkeeping & accounting',
                                'Smart tax planning & compliance',
                                'Real-time financial insights',
                                'Advisory support to grow your business'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigateTo('contact')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Get a Free Consultation
                            </button>
                            <button
                                onClick={() => navigateTo('services')}
                                className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Glowing gradient orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Background bookkeeping vector */}
                <img
                    src="/images/bookkeeping-bg.svg" // <-- replace with your vector illustration path
                    alt="Bookkeeping illustration"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
                />

                {/* Thematic Lucide icons */}
                <Calculator className="absolute top-28 left-1/4 text-white/10 w-36 h-36 rotate-12" />
                <FileSpreadsheet className="absolute bottom-24 right-1/4 text-white/10 w-40 h-40 -rotate-6" />
                <BarChart3 className="absolute top-1/3 right-16 text-white/10 w-32 h-32 rotate-12" />
                <PiggyBank className="absolute bottom-10 left-1/3 text-white/10 w-32 h-32 rotate-6" />

                {/* Main content */}
                <div className="max-w-7xl mx-auto relative  flex z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Your Financial Clarity. Our Expertise.
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-white/90">
                            We help businesses stay financially organized, compliant, and ready for growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                "Accurate bookkeeping & accounting",
                                "Smart tax planning & compliance",
                                "Real-time financial insights",
                                "Advisory support to grow your business",
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-green-400" />
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigateTo("contact")}
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Get a Free Consultation
                            </button>
                            <button
                                onClick={() => navigateTo("services")}
                                className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Our Services
                            </button>
                        </div>
                    </div>
                    <img className="bg-blend-color-burn w-2/3" src={Img1} alt="" />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-gray-600">Excellence in every aspect of our service</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Financial Management?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss how we can help your business grow with expert financial guidance.
                    </p>
                    <button
                        onClick={() => navigateTo('contact')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                        <span>Contact Us Today</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </>
    );
};

export default HomePage;