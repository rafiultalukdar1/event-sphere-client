import React, { useEffect, useState } from 'react';
import UpEventCard from './UpEventCard';
import useAxios from "../../context/useAxios";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
    const axios = useAxios();
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');
    const [page, setPage] = useState(1);
    const [limit] = useState(6);

    useEffect(() => {
        const params = new URLSearchParams();
        if (filterType) params.append('type', filterType);
        if (search) params.append('search', search);
        params.append('page', page);
        params.append('limit', limit);
        axios.get(`/upcoming-events?${params.toString()}`)
            .then(res => {
                const upcoming = res.data.filter(event => new Date(event.event_date) > new Date());
                setEvents(upcoming);
            });
    }, [search, filterType, page, axios]);

    useEffect(() => {
        const interval = setInterval(() => {
            setEvents(prev => prev.filter(event => new Date(event.event_date) > new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const totalPages = Math.ceil(events.length / limit);

    return (
        <div className='py-[50px] md:py-[70px]'>
            <div className='container'>
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'>
                    Upcoming <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>Events</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-center text-[16px] md:text-[18px] font-medium text-[#6D7873]'>
                    Join these amazing events and make a difference in your community
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='flex flex-col md:flex-row justify-between items-center gap-3 mt-[35px] md:mt-[50px]'>
                    <input type='text' placeholder='Search events by name...' value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className='form-input max-w-[400px]'/>
                    <select value={filterType} onChange={(e) => { setFilterType(e.target.value); setPage(1); }} className='form-input max-w-[400px]'>
                        <option value=''>All Event Types</option>
                        <option value='Cleanup'>Cleanup</option>
                        <option value='Plantation'>Plantation</option>
                        <option value='Donation'>Donation</option>
                        <option value='Healthcare'>Healthcare</option>
                        <option value='Education'>Education</option>
                    </select>
                </motion.div>
                <div className='mt-[35px] md:mt-[50px]'>
                    <UpEventCard events={events.slice((page - 1) * limit, page * limit)} />
                </div>

                {events.length > limit && (
                    <div className='flex justify-center gap-2 mt-5 lg:mt-8'>
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} className='px-4 py-2 bg-[#219E64] text-white rounded disabled:bg-[#E5E7EB] disabled:border border-[#1414146c] disabled:text-[#141414]'>Prev</button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} onClick={() => setPage(i + 1)} className={`px-4 py-2 rounded ${page === i + 1 ? 'bg-[#219E64] text-white' : 'bg-gray-200'}`}>{i + 1}</button>
                        ))}
                        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className='px-4 py-2 bg-[#219E64] text-white rounded disabled:bg-[#E5E7EB] disabled:border border-[#1414146c] disabled:text-[#141414]'>Next</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpcomingEvents;