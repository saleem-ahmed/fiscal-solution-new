import { useState } from 'react';
import { BarChart2, BookOpen, FileText, PieChart, Users, DollarSign } from 'lucide-react';
const services = [
    {
        icon: '📊',
        title: 'Bookkeeping & Accounting',
        description: 'We manage your daily financial records: recording transactions, reconciling accounts, and managing receivables/payables. You\'ll always have updated books that comply with standards.'
    },
    {
        icon: '💼',
        title: 'Tax Planning & Compliance',
        description: 'We help you plan for taxes in advance, ensuring compliance with national and international tax obligations, minimizing risk and optimizing your tax position.'
    },
    {
        icon: '📈',
        title: 'Financial Reporting & Analysis',
        description: 'We provide accurate financial statements and insights so you can make informed decisions, spotting trends and opportunities early.'
    },
    {
        icon: '👥',
        title: 'Payroll & HR Compliance',
        description: 'We handle payroll, deductions, regulatory filings, and HR-related accounting to keep you compliant.'
    },
    {
        icon: '🎯',
        title: 'Advisory & Consulting',
        description: 'Need help with budgeting, forecasting, financial modeling, or business expansion? We offer tailored advisory services to help your business grow.'
    }
];


const faqs = [
    {
        question: 'What industries do you specialize in?',
        answer: 'We have experience across various industries including retail, manufacturing, technology, healthcare, and professional services. Our team adapts to the unique financial needs of each sector.'
    },
    {   
        question: 'How do you ensure data security?',   
        answer: 'We use advanced encryption methods, secure cloud storage, and follow best practices in data protection to ensure your financial information remains confidential and secure.'
    },
    {
        question: 'What software do you use for accounting?',
        answer: 'We utilize leading accounting software such as QuickBooks, Xero, and Sage, among others, depending on your business needs and preferences.'            
    },
    {
        question: 'Can you help with international tax compliance?',
        answer: 'Yes, we have expertise in international tax laws and can assist with cross-border tax planning, compliance, and reporting to ensure your business meets all regulatory requirements.'
    },
];

const ServicesPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    return (
        <>
            <div className=" bg-gray-50 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive financial solutions tailored to your business needs. We provide expert guidance across all aspects of financial management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-600 group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white rounded-2xl p-10 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                        <span className={`text-2xl text-blue-600 transition-transform duration-300 ${activeFaq === idx ? 'rotate-45' : ''}`}>
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ServicesPage;
