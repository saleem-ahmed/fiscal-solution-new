import React from 'react';
import { useNavigate } from 'react-router';
import Hassan from '../assets/hassan.webp';
import Salman from '../assets/salman.webp';
import Sajid from '../assets/sajid.webp';
import Zulfiqar from '../assets/zulfiqar.webp';
const TeamPage = () => {
    const navigateTo = useNavigate();

    const teamMembers = [
        {
            name: 'Hassan Karim',
            role: 'CEO & Founder',
            image: Hassan,
            bio: 'Over 7 years of experience in financial consulting and strategic planning.'
        },
        {
            name: 'Salman Karim',
            role: 'Bookkeeping Lead & Co-Founder',
            image: Salman,
            bio: 'Certified Public Accountant with expertise in international tax compliance.'
        },
        {
            name: 'Sajid Karim',
            role: 'Finance Manager & Co-Founder',
            image: Sajid,
            bio: 'Specializes in financial record management and accounting systems.'
        },
        {
            name: 'Zulfiqar Ali',
            role: 'Financial Contoller & Co-Founder',
            image: Zulfiqar,
            bio: 'Expert in financial modeling, forecasting, and data-driven insights.'
        },

    ];


    return (
        // <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
        //     <div className="max-w-7xl mx-auto">
        //         <div className="text-center mb-16">
        //             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
        //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        //                 Our experienced professionals are dedicated to providing exceptional financial services and guidance
        //             </p>
        //         </div>

        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        //             {teamMembers.map((member, idx) => (

        //                 <div  key={idx}>
        //                     <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
        //                         <img src={member.image} loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-top aspect-square" />
        //                     </div>

        //                     <div>
        //                         <div class="font-bold text-indigo-500 md:text-lg">{member.name}</div>
        //                         <p class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">{member.role}</p>

        //                         <div class="flex">
        //                             <div class="flex gap-4">
        //                                 <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        //                                     <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        //                                     </svg>
        //                                 </a>

        //                                 <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        //                                     <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>

        //         <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center shadow-2xl">
        //             <h2 className="text-4xl font-bold mb-6">Join Our Growing Team</h2>
        //             <p className="text-xl mb-8 max-w-2xl mx-auto">
        //                 We're always looking for talented professionals who share our commitment to excellence and client service.
        //             </p>
        //             <button
        //                 onClick={() => navigateTo('contact')}
        //                 className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        //             >
        //                 Get In Touch
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="text-center my-12 md:my-16  w-[80%] mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                    Meet Our Team
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Our experienced professionals are dedicated to providing exceptional financial services and guidance
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-[80%] mx-auto">
                {teamMembers.map((member, idx) => (
                    <div key={idx}>
                        <div className="mb-3 h-64  md:h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                            <img
                                src={member.image}
                                loading="lazy"
                                alt={member.name}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <div>
                            <div className="font-bold text-indigo-500 text-base md:text-lg">
                                {member.name}
                            </div>

                            <p className="mb-3 text-sm md:text-base text-gray-500">
                                {member.role}
                            </p>

                            <div className="flex gap-5">
                                {/* Social Icons */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 md:mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Join Our Growing Team
                </h2>

                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                    We're always looking for talented professionals who share our commitment to excellence and client service.
                </p>

                <button
                    onClick={() => navigateTo('contact')}
                    className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                    Get In Touch
                </button>
            </div>
        </>
    );
};
export default TeamPage;