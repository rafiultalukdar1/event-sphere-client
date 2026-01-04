import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {

    const aboutData = {
        heading: "About",
        highlight: "EventSphere",
        description: "EventSphere is a smart event management platform that simplifies planning and organizing events in one place.",
        cards: [
            { title: "Easy Planning", text: "Create and manage events effortlessly with a simple workflow." },
            { title: "Smart Management", text: "Handle registrations, schedules, and updates from one dashboard." },
            { title: "Seamless Experience", text: "Deliver a smooth experience for organizers and attendees." }
        ]
    };

    const missionData = {
        heading: "Our",
        highlight: "Mission",
        description: "Our mission is to empower individuals and organizations to create memorable events through simple, reliable, and innovative technology.",
        points: [
            "Simplify event planning for everyone",
            "Enable seamless collaboration",
            "Deliver reliable and scalable solutions"
        ],
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    };

    return (
        <>
            {/* About Section */}
            <div className='py-[50px] md:py-[70px]'>
                <div className='container'>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'
                    >
                        {aboutData.heading}{' '}
                        <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>
                            {aboutData.highlight}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='text-center text-[16px] md:text-[18px] font-medium text-[#6D7873] max-w-[560px] mx-auto mt-4'
                    >
                        {aboutData.description}
                    </motion.p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
                        {aboutData.cards.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='p-6 rounded-2xl border border-[#E5EAE8] text-center'
                            >
                                <h3 className='text-[20px] font-semibold mb-2'>{item.title}</h3>
                                <p className='text-[#6D7873]'>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className='py-[60px] md:py-20'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className='rounded-2xl overflow-hidden'
                        >
                            <img
                                src={missionData.image}
                                alt="Our Mission"
                                className='w-full h-full object-cover'
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className='text-[32px] sm:text-[40px] font-bold mb-4'>
                                {missionData.heading}{' '}
                                <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>
                                    {missionData.highlight}
                                </span>
                            </h2>

                            <p className='text-[16px] md:text-[18px] text-[#6D7873] mb-6'>
                                {missionData.description}
                            </p>

                            <div className='space-y-3'>
                                {missionData.points.map((point, index) => (
                                    <div key={index} className='flex items-center gap-3 text-[#6D7873]'>
                                        <span className='w-2.5 h-2.5 rounded-full bg-[#219E64]'></span>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
