import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { FaRegCalendar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {

    const {user, logOut} = use(AuthContext);
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Log Out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'You logged out successfully!',
                    timer: 1500,
                    showConfirmButton: false
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    };

    // Dark mood
    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const links = <>
        {/* <NavLink to='/create-event'>Create Event</NavLink>
        <NavLink to='/manage-events'>Manage Events</NavLink>
        <NavLink to='/joined-events'>Joined Events</NavLink> */}
        <Link to='dashboard/create-event' className='flex items-center gap-2 px-[15px] py-2 text-[15px] font-medium text-[#141414] dark:text-white hover:bg-[#219E64] hover:text-white transition rounded w-full'><LuLayoutDashboard /><span>Dashboard</span></Link>
        <Link to='dashboard/profile' className='flex items-center gap-2 px-[15px] py-2 text-[15px] font-medium text-[#141414] dark:text-white hover:bg-[#219E64] hover:text-white transition rounded w-full'><CgProfile /><span>Profile</span></Link>
    </>

    return (
        <>
            <div className='bg-[#F8F8F8] dark:bg-gray-900 shadow-sm dark:shadow-md py-2.5 sticky top-0 z-99'>
                <div className='navbar container'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <div tabIndex={0} role='button' className='lg:hidden cursor-pointer mr-2'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                            </div>
                            <nav tabIndex='-1' className='menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow px-5 py-3 space-y-1.5'>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/upcoming-events'>Upcoming Events</NavLink>
                                <NavLink to='/about-us'>About Us</NavLink>
                                <NavLink to='/contact'>Contact</NavLink>
                            </nav>
                        </div>
                        <NavLink to='/' className='flex items-center gap-1.5 text-[20px] sm:text-[22px] font-bold text-[#219E64]'><FaRegCalendar /><><span className='sm:hidden'>E-Sphere</span><span className='hidden sm:block'>EventSphere</span></></NavLink>
                    </div>

                    <div className='navbar-center hidden lg:flex'>
                        <nav className='flex items-center gap-[22px]'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/upcoming-events'>Upcoming Events</NavLink>
                            <NavLink to='/about-us'>About Us</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </nav>
                    </div>


                    <div className='navbar-end gap-3 sm:gap-6'>
                        <div>
                            <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem('theme') === "dark"} className="toggle"/>
                        </div>
                            {
                                user ? (
                                    <div className='relative'>
                                        <div className='relative'>
                                            <img 
                                                onClick={() => setOpen(!open)}  
                                                src={user.photoURL} 
                                                className='w-11 h-11 object-cover rounded-full cursor-pointer p-0.5 border border-[#219e64a8]' 
                                            />
                                        </div>
                                        {open && (
                                            <div className='absolute menu bg-base-100 right-0 w-[235px] px-[15px] py-[22px] rounded-lg shadow-xl space-y-4'>
                                                <div>
                                                    <h4 className='text-[#141414] dark:text-white text-[20px] font-semibold'>{user.displayName}</h4>
                                                    <p className='text-sm'>{user.email}</p>
                                                </div>
                                                <div onClick={() => setOpen(false)} className='dropdown-link flex flex-col text-[18px] font-semibold border-y border-[#DADADA] dark:border-[#464646] py-2.5'>
                                                    {links}
                                                </div>
                                                <button onClick={() => { handleLogOut(); setOpen(false); }} className='flex items-center gap-2 px-[15px] py-1.5 text-[16px] font-medium text-red-500 hover:bg-[#219E64] hover:text-white transition rounded w-full'><AiOutlineLogout />LogOut</button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className='login-nav flex items-center gap-2'>
                                        <NavLink to='/login' className='py-1.5 px-5 bg-white rounded-lg text-[#219E64] border border-[#219E64] text-[18px] font-semibold'>Login</NavLink>
                                        <NavLink to='/register' className='py-1.5 px-5 bg-white rounded-lg text-[#219E64] border border-[#219E64] text-[18px] font-semibold hidden sm:block'>Register</NavLink>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;