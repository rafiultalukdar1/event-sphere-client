import { CiShoppingTag } from 'react-icons/ci';
import { FaArrowLeft, FaMapMarkerAlt, FaRegCalendar } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import useAuth from '../../context/useAuth';
import useAxiosSecure from '../../context/useAxiosSecure';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

const EventDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [event, setEvent] = useState({});
    const [joinedEvents, setJoinedEvents] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchEvent = async () => {
            const res = await axios.get(`https://tenth-assignment-server-tan.vercel.app/events/${id}`);
            setEvent(res.data);
        };
        fetchEvent();
    }, [id]);

    // Join event
    const handleJoinEvent = () => {
        if (!user) {
            toast.error('Login required! Please login to join this event.');
            return navigate('/login', { state: { from: location.pathname } });
        }

        axiosSecure.post('/join-event', { eventId: id, userEmail: user.email })
            .then(res => {
                console.log('Join Event Response:', res.data);
                if (res.data?.message) {
                    toast.success(res.data.message);
                }
                return axiosSecure.get(`/joined-events?email=${user.email}`);
            })
            .then(joinedRes => {
                console.log('Joined Events:', joinedRes.data);
                if (joinedRes?.data) setJoinedEvents(joinedRes.data);
            })
            .catch(err => {
                console.error('Join Event Error:', err.response || err);
                const status = err.response?.status;
                switch (status) {
                    case 400:
                        toast.warning(
                            err.response.data?.message || 'You have already joined this event');
                        break;
                    case 401:
                        toast.error('Unauthorized! Please login again.');
                        break;
                    default:
                        toast.error('Something went wrong. Please try again later.');
                        break;
                }
            });
    };

    useEffect(() => {
        if (!user) return;
        const fetchJoinedEvents = async () => {
            const res = await axiosSecure.get(`/joined-events?email=${user.email}`);
            setJoinedEvents(res.data);
        };
        fetchJoinedEvents();
    }, [user, axiosSecure]);

    const { thumbnail, event_type, title, description, event_details, event_date, organizer_photo, organizer_name, organizer_email } = event;

    return (
        <>
            <div className='py-[50px] md:py-[70px]'>
                <div className='container'>
                    <div className='max-w-[890px] mx-auto'>
                        <Link to='/upcoming-events' className='flex items-center gap-1.5 text-[16px] font-medium text-[#65758B] dark:text-white'>
                            <FaArrowLeft /><span>Back to Events</span>
                        </Link>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                            <img className='h-[310px] sm:h-[390px] md:h-[470px] w-full object-cover rounded-lg md:rounded-2xl mt-5 md:mt-[35px] shadow-sm dark:shadow-white' src={thumbnail} alt='' />
                        </motion.div>
                        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='inline-flex items-center gap-1.5 py-1.5 px-4 bg-[#E7F8F2] text-[15px] text-[#10B77F] font-medium rounded-full mt-5'>
                            <CiShoppingTag /><span>{event_type}</span>
                        </motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-[#141414] dark:text-white text-[24px] sm:text-[28px] md:text-[36px] font-bold mt-5'>{title}</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-[#65758B] dark:text-[#9fb8df] text-[15px] pt-4 pb-7'>{description}</motion.p>
                        <div className='grid grid-cols-12 gap-5 items-start'>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='p-3 sm:p-5 border border-[#E1E7EF] dark:border-white rounded-2xl col-span-12 lg:col-span-7'>
                                <h4 className='text-[#141414] dark:text-white text-[20px] sm:text-[22px] font-semibold'>Event Details</h4>
                                <p className='text-[#65758B] dark:text-[#9fb8df] text-[15px] border-b pt-1.5 pb-3'>{event_details}</p>
                                <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-2.5'>
                                    <div className='flex items-center gap-2.5'>
                                        <div className='bg-[#E9F7EF] w-10 h-10 rounded-full flex items-center justify-center'><FaRegCalendar className='text-[#219E64] text-[18px]'/></div>
                                        <h4 className='text-[18px] text-[#141414] dark:text-white font-semibold'>{new Date(event_date).toLocaleDateString('en-CA')}</h4>
                                    </div>
                                    <div className='flex items-center gap-2.5'>
                                        <div className='bg-[#E9F7EF] w-10 h-10 rounded-full flex items-center justify-center'><FaMapMarkerAlt className='text-[#219E64] text-[18px]'/></div>
                                        <h4 className='text-[18px] text-[#141414] dark:text-white font-semibold'>{event.location}</h4>
                                    </div>
                                </div>
                            </motion.div>
                            <div className='col-span-12 lg:col-span-5'>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='p-3 sm:p-5 border border-[#E1E7EF] dark:border-white rounded-2xl'>
                                    <h4 className='text-[#141414] dark:text-white text-[18px] md:text-[20px] font-semibold'>Organized By</h4>
                                    <div className='flex gap-2.5 mt-3'>
                                        <div>
                                            <img className='h-12 w-12 rounded-full object-cover' src={organizer_photo} alt='' />
                                        </div>
                                        <div>
                                            <h4 className='text-[#141414] dark:text-white text-[18px] font-semibold'>{organizer_name}</h4>
                                            <p className='text-[15px]'>{organizer_email}</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='p-3 sm:p-5 border border-[#E1E7EF] dark:border-white rounded-2xl mt-4'>
                                    <h4 className='text-[#141414] dark:text-white text-[18px] md:text-[20px] font-semibold'>Join This Event</h4>
                                    <button onClick={handleJoinEvent} className='py-1.5 w-full bg-[#219E64] rounded mt-4 mb-3 text-white text-[17px] font-medium text-center'>Join Event</button>
                                    <p className='text-[14px] text-[#65758B] dark:text-[#9fb8df]'>By joining, you'll receive event updates and reminders</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
