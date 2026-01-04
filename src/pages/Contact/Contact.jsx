import React from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {

    const infoBoxes = [
        { Icon: FaMapMarkerAlt, title: "Visit Us", text: "456 Event Street, Tech District, Dhaka 1207" },
        { Icon: FaPhone, title: "Call Us", text: "+880 1234 567 890\n+880 9876 543 210" },
        { Icon: FaEnvelope, title: "Email Us", text: "support@eventsphere.com\ninfo@eventsphere.com" },
        { Icon: FaClock, title: "Working Hours", text: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM" },
    ];

    return (
        <div className='py-[60px] md:py-[90px]'>
            <div className='container mx-auto'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'
                >
                    Get in <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>Touch</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center text-[16px] md:text-[18px] text-[#6D7873] max-w-[600px] mx-auto mt-3'
                >
                    Have questions or want to work with us? We’d love to hear from you.
                </motion.p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 items-start'>

                    {/* Left Column: Info Boxes */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='space-y-8'
                    >
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {infoBoxes.map((box, index) => {
                                const Icon = box.Icon;
                                return (
                                    <div key={index} className='border border-[#E5EAE8] p-5 rounded-xl flex flex-col items-start gap-3 hover:shadow-lg transition'>
                                        <div className='text-[#219E64] text-[35px]'><Icon /></div>
                                        <h4 className='font-semibold text-[22px]'>{box.title}</h4>
                                        <p className='text-[#6D7873] whitespace-pre-line text-sm'>{box.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='bg-white p-6 rounded-2xl border border-[#E5EAE8]'
                    >
                        <h3 className='text-xl font-semibold mb-4'>Send us a Message</h3>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <input
                            required
                                type="text"
                                placeholder="Your Name"
                                className='w-full border border-[#E5EAE8] rounded-lg px-2 py-2 focus:outline-none focus:border-[#219E64]'
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className='w-full border border-[#E5EAE8] rounded-lg px-2 py-2 focus:outline-none focus:border-[#219E64]'
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className='w-full border border-[#E5EAE8] rounded-lg px-2 py-2 mb-4 focus:outline-none focus:border-[#219E64]'
                        />

                        <textarea
                            rows="3"
                            placeholder="Your Message"
                            className='w-full border border-[#E5EAE8] rounded-lg px-2 py-2 mb-5 focus:outline-none focus:border-[#219E64]'
                        />

                        <button
                            type="submit"
                            className='w-full bg-linear-to-r from-[#219E64] to-[#5FD68E] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition'
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
