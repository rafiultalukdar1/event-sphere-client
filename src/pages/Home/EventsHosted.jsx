import React from 'react';

const EventsHosted = () => {
    return (
        <div>
            <section class="bg-[#DCF7F0] text-white py-16 lg:py-22">
                <div className='container'>
                    <div class="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
                        <div>
                        <h2 class="text-[42px] font-extrabold text-black">500+</h2>
                        <p class="mt-1  text-[#141414]">Events Hosted</p>
                        </div>
                        <div>
                        <h2 class="text-[42px] font-extrabold text-black">2000+</h2>
                        <p class="mt-1  text-[#141414]">Happy Attendees</p>
                        </div>
                        <div>
                        <h2 class="text-[42px] font-extrabold text-black">95%</h2>
                        <p class="mt-1  text-[#141414]">Satisfaction Rate</p>
                        </div>
                        <div>
                        <h2 class="text-[42px] font-extrabold text-black">48h</h2>
                        <p class="mt-1  text-[#141414]">Avg. Response Time</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsHosted;