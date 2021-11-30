import React, { useEffect } from 'react';
import './About.css'
import myPic from '../../images/man.jpg'
import resume from '../../images/resume_shakil.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className='about-section' id='about'>
            <div className='container p-5'>
                <h1 class='d-flex justify-content-center p-5'>About Me</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div data-aos="fade-right" className="col-lg-6 d-flex justify-content-center">
                        <img class='rounded' width='60%' src={myPic} alt="" />
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="col-lg-6 d-flex justify-content-center">
                        <div>
                            <p class="fs-5">Hi, I am a Junior Front-End Developer.To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Front-End Web Development and use these skills in providing quality service to the company.
                            </p>
                            <a target='_blank' href={resume}>
                                <button className='resume-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;