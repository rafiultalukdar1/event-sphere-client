import React, { use } from 'react';
import { CiShoppingTag } from 'react-icons/ci';
import { FaRegCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const UpEventCard = ({upEventPromise}) => {

    const events = use(upEventPromise)

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    events.map(event => (<div key={event._id} className='bg-white shadow-sm rounded-lg'>
                        <img src={event.thumbnail} className='h-[255px] w-full object-cover rounded-t-lg' alt="" />
                        <div className='pt-3 px-4 pb-4'>
                            <p className='inline-flex items-center gap-1 py-0.5 px-2 bg-[#E7F8F2] text-[12px] text-[#10B77F] font-medium rounded-full'><CiShoppingTag /><span>{event.event_type}</span></p>
                            <h2 className='pt-2 text-[#141414] text-[20px] font-semibold'>{event.title}</h2>
                            <p className='text-[#6D7873] text-[15px] py-1 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'>{event.description}</p>
                            <h6 className='mt-2 flex items-center gap-1.5 text-[15px] font-medium text-[#141414]'><FaRegCalendar className='text-[16px] text-[#10B77F]'/><span>{event.event_date}</span></h6>
                            <h6 className='mt-2 flex items-center gap-1.5 text-[15px] font-medium text-[#141414]'><FaLocationDot className='text-[16px] text-[#10B77F]'/><span>{event.location}</span></h6>
                            <button className='py-1.5 w-full bg-[#219E64] rounded mt-5 text-white text-[17px] font-medium'>View Event</button>
                        </div>
                    </div>))
                }
            </div>
        </>
    );
};

export default UpEventCard;