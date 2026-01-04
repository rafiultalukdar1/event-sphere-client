import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext);

    return (
        <>
            <div className='px-[15px]'>
                <div className='max-w-[890px] mx-auto mt-[75px] md:mt-[120px] space-y-7 shadow-lg rounded-2xl p-5 lg:p-8 dark:bg-[#101828]'>
                    <h2 className='text-[30px] sm:text-[38px] lg:text-[45px] font-bold bg-linear-to-b from-[#219E64] to-[#5FD68E] bg-clip-text text-transparent'>My Profile</h2>
                    <div className='flex items-center gap-3'>
                        <img src={user.photoURL} className='h-18 w-18 object-cover rounded-full' alt="" />
                        <div>
                            <h4 className='text-[28px] font-semibold'>{user.displayName}</h4>
                            <p className='text-sm'>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;