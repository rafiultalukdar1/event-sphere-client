import React, { useEffect, useState } from 'react';
import useAuth from '../../context/useAuth';
import useAxios from '../../context/useAxios';

const ManageEvents = () => {

    const { user } = useAuth();
    const axios = useAxios();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`/my-events?email=${user.email}`)
                .then(res => setEvents(res.data))
                .catch(err => console.error(err));
        }
    }, [user, axios]);


    return (
        <>
            <div className='py-[50px] md:py-[70px]'>
                <div className='container'>
                    <h2 className='text-center text-[32px] sm:text-[40px] lg:text-[50px] font-bold'>Manage <span className='bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>Events</span></h2>

                    
                    
                    <div>
                        {
                            events.map(event => (
                                <div>{event.title}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageEvents;