import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div>
            <Header></Header>
            <div class='text-center'>
                <h1 className='text-center'>BLogs coming soon</h1>
                <Link to='/'>
                    <button class='primary'>BACK HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default Blogs;