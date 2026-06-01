import { useState } from 'react';
import { Mail, Globe, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ✅ Replace these with your actual EmailJS credentials
// const EMAILJS_PUBLIC_KEY  = 'Fs79_cMnIpK-icKNP';
// const EMAILJS_SERVICE_ID  = 'service_9dyrkcf';
// const EMAILJS_TEMPLATE_ID = 'template_qezzcel';
const EMAILJS_PUBLIC_KEY  = 'BzktT9hAeQuEAsoxc';
const EMAILJS_SERVICE_ID  = 'service_4way7nq';
const EMAILJS_TEMPLATE_ID = 'template_esvplpc';

// Initialize EmailJS once
emailjs.init(EMAILJS_PUBLIC_KEY);

const ContactPage = () => {
    const [formData, setFormData] = useState({
        from_name:  '',
        from_email: '',
        phone:      '',
        service:    '',
        message:    '',
    });

    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.from_name.trim())  newErrors.from_name  = 'Full name is required.';
        if (!formData.from_email.trim()) {
            newErrors.from_email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
            newErrors.from_email = 'Please enter a valid email address.';
        }
        if (!formData.service)           newErrors.service    = 'Please select a service.';
        if (!formData.message.trim())    newErrors.message    = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('sending');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name:  formData.from_name,
                    from_email: formData.from_email,
                    phone:      formData.phone || 'Not provided',
                    service:    formData.service,
                    message:    formData.message,
                    to_name:    'Fiscal International Services',
                    reply_to:   formData.from_email,
                }
            );

            setStatus('success');
            setFormData({ from_name: '', from_email: '', phone: '', service: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch with us today. We'd love to hear from you and discuss how we can help your business thrive.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left — Contact Info */}
                    <div>
                        <div className="bg-white rounded-2xl p-10 shadow-lg mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Email</p>
                                        <p className="text-lg text-gray-900">fiscalsolutions45@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Website</p>
                                        <p className="text-lg text-gray-900">www.fiscalinternationalservices.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                                        <p className="text-lg text-gray-900">+923401260088</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-lg">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 2:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="bg-white rounded-2xl p-10 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                        {/* Success Banner */}
                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-3">
                                <span className="text-2xl">✅</span>
                                Message sent! We'll get back to you soon.
                            </div>
                        )}

                        {/* Error Banner */}
                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium flex items-center gap-3">
                                <span className="text-2xl">❌</span>
                                Failed to send. Please try again or email us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors
                                        ${errors.from_name
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-gray-200 focus:border-blue-600'}`}
                                    placeholder="John Doe"
                                />
                                {errors.from_name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.from_name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors
                                        ${errors.from_email
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-gray-200 focus:border-blue-600'}`}
                                    placeholder="john@example.com"
                                />
                                {errors.from_email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.from_email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Service Interested In <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors
                                        ${errors.service
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-gray-200 focus:border-blue-600'}`}
                                >
                                    <option value="">Select a service</option>
                                    <option>Bookkeeping &amp; Accounting</option>
                                    <option>Tax Planning &amp; Compliance</option>
                                    <option>Financial Reporting &amp; Analysis</option>
                                    <option>Payroll &amp; HR Compliance</option>
                                    <option>Advisory &amp; Consulting</option>
                                </select>
                                {errors.service && (
                                    <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none
                                        ${errors.message
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-gray-200 focus:border-blue-600'}`}
                                    placeholder="Tell us about your needs..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                            >
                                {status === 'sending' ? '⏳ Sending...' : 'Send Message'}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;