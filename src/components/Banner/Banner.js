import React from 'react';
import './Banner.css'
import resume from '../../images/resume_shakil.pdf'

const Banner = () => {

    return (
        <div className='banner' id='home'>
            <div className='container glass'>
                <div>
                    <h4>Hello! I am</h4>
                    <h1 className='my-name'>Shakil Hossain</h1>
                    <h1>I am Junior Front-End Web Developer</h1>
                    <a target='_blank' href={resume}>
                        <button className='resume-btn'>Get Resume</button>
                    </a>
                    <h4>Follow me:-</h4>
                    <a target='_blank' href="https://github.com/shakil-1318">
                        <span><i class="fab fa-github profile-icon"></i></span>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/md-shakil-hossain-897926214/">
                        <span><i class="fab fa-linkedin profile-icon"></i></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;