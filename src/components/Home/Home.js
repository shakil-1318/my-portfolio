import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Header from '../Header';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;