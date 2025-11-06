import React from 'react';
import { useNavigate } from 'react-router';

const TeamPage = () => {
    const navigateTo = useNavigate();

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: '👩‍💼',
            bio: 'Over 20 years of experience in financial consulting and strategic planning.'
        },
        {
            name: 'Michael Chen',
            role: 'Tax Director',
            image: '👨‍💼',
            bio: 'Certified Public Accountant with expertise in international tax compliance.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Bookkeeping',
            image: '👩‍💻',
            bio: 'Specializes in financial record management and accounting systems.'
        },
        {
            name: 'David Thompson',
            role: 'Financial Analyst',
            image: '👨‍💻',
            bio: 'Expert in financial modeling, forecasting, and data-driven insights.'
        },
        {
            name: 'Lisa Martinez',
            role: 'Payroll Manager',
            image: '👩‍💼',
            bio: 'Dedicated to ensuring accurate payroll processing and HR compliance.'
        },
        {
            name: 'James Wilson',
            role: 'Business Advisor',
            image: '👨‍💼',
            bio: 'Provides strategic guidance to help businesses scale and grow.'
        }
    ];


    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our experienced professionals are dedicated to providing exceptional financial services and guidance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                                {member.image}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6">Join Our Growing Team</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We're always looking for talented professionals who share our commitment to excellence and client service.
                    </p>
                    <button
                        onClick={() => navigateTo('contact')}
                        className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TeamPage;