import React from 'react';
import Banner from './Banner';
import Impact from './Impact';
import Gallery from './Gallery';
import Newsletter from './Newsletter';
import EventsHosted from './EventsHosted';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Impact></Impact>
            <Gallery></Gallery>
            <EventsHosted></EventsHosted>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;