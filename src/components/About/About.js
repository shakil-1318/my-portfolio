import React from 'react';
import './About.css'
import myPic from '../../images/me.jpg'
import resume from '../../images/resume_shakil.pdf'

const About = () => {
    return (
        <div className='about-section' id='about'>
            <div className='container p-5'>
                <h1 class='d-flex justify-content-center p-5'>About Me</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img class='rounded' width='60%' src={myPic} alt="" />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div>
                            <p class="fs-5">Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi ab quos accusamus voluptas, quo voluptatem reprehenderit necessitatibus vel sit id quam hic rem nostrum nulla numquam repudiandae, reiciendis ullam minima in modi odio. Nam aperiam cupiditate tempora tempore deleniti neque </p>
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