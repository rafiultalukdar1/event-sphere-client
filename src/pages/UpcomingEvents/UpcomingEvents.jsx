import React from 'react';
import UpEventCard from './UpEventCard';

const upEventPromise = fetch('http://localhost:3000/upcoming-events').then(res => res.json());

const UpcomingEvents = () => {
    return (
        <>
            <div className='py-[50px] md:py-[70px]'>
                <div className='container'>
                    <h2 className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'>Upcoming <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>Events</span></h2>
                    <p className='text-center text-[16px] md:text-[18px] font-medium text-[#6D7873]'>Join these amazing events and make a difference in your community</p>
                    <div className='mt-[35px] md:mt-[50px] '>
                        <UpEventCard upEventPromise={upEventPromise}></UpEventCard>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default UpcomingEvents;