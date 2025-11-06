import { Briefcase, Heart, Target } from 'lucide-react';

const AboutPage = () => (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Empowering businesses with financial clarity and strategic guidance
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div className="bg-white rounded-2xl p-10 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To empower businesses with clarity, accuracy, and peace of mind when it comes to their finances. We believe strong accounting is the foundation of smart growth.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-10 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Fiscal International Services is a team of experienced accountants, bookkeepers, tax professionals, and financial analysts. With combined years of experience across industries, we bring deep technical know-how and a client-first mindset.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-20 shadow-2xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Why "Fiscal International Services"?</h2>
                    <p className="text-xl leading-relaxed text-center mb-8">
                        We aim to serve clients not just locally, but globally. "Fiscal" indicates our financial expertise, "International" reflects our scope, and "Services" underscores that we deliver full support — not just products.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Integrity & Transparency',
                            description: 'We operate with honesty and openness in all our dealings'
                        },
                        {
                            title: 'Accuracy & Attention to Detail',
                            description: 'We ensure precision in every aspect of our work'
                        },
                        {
                            title: 'Client Focus & Responsiveness',
                            description: 'Your needs are at the heart of everything we do'
                        },
                        {
                            title: 'Continuous Learning & Improvement',
                            description: 'We stay current with industry changes and best practices'
                        }
                    ].map((value, idx) => (
                        <div key={idx} className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <span className="text-blue-600 text-2xl">◆</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
export default AboutPage;