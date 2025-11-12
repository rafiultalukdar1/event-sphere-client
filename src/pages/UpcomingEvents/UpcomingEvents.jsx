import React, { useEffect, useState } from 'react';
import UpEventCard from './UpEventCard';
import useAxios from "../../context/useAxios";

const UpcomingEvents = () => {

    // const axios = useAxios();
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     axios.get('/upcoming-events')
    //         .then(res => setEvents(res.data))
    //         .catch(err => console.error(err));
    // }, [axios]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setEvents(prev => prev.filter(event => new Date(event.event_date) > new Date()));
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    const axios = useAxios();
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('')

    useEffect(() => {
        const params = new URLSearchParams();
        if (filterType) params.append('type', filterType);
        if (search) params.append('search', search);
        axios.get(`/upcoming-events?${params.toString()}`)
            .then(res => {
                const upcoming = res.data.filter(event => new Date(event.event_date) > new Date());
                setEvents(upcoming);
            })
            .catch(err => console.log(err));
    }, [search, filterType, axios]);

    useEffect(() => {
        const interval = setInterval(() => {
            setEvents(prev => prev.filter(event => new Date(event.event_date) > new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='py-[50px] md:py-[70px]'>
            <div className='container'>
                <h2 className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'>
                    Upcoming <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>Events</span>
                </h2>
                <p className='text-center text-[16px] md:text-[18px] font-medium text-[#6D7873]'>
                    Join these amazing events and make a difference in your community
                </p>

                <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-[35px] md:mt-[50px]'>
                    <input type='text'  placeholder='Search events by name...' value={search}  onChange={(e) => setSearch(e.target.value)} className='form-input max-w-[400px]'/>
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className='form-input max-w-[400px]'>
                        <option value=''>All Event Types</option>
                        <option value='Cleanup'>Cleanup</option>
                        <option value='Plantation'>Plantation</option>
                        <option value='Donation'>Donation</option>
                        <option value='Healthcare'>Healthcare</option>
                        <option value='Education'>Education</option>
                    </select>
                </div>
                <div className='mt-[35px] md:mt-[50px]'>
                    <UpEventCard events={events} />
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;