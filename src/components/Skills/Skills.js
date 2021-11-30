import React from 'react';
import './Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Skills = () => {
    const html = 95;
    const css = 90;
    return (
        <div className='skill-section' class='p-5 bg-black text-white' id='skill'>
            <div className=" container">
                <h1 class='text-center'>MY SKILLS</h1>
                <div className="row">
                    <div className="col-lg-4 pb-5">
                        <p>HTML</p>
                        <ProgressBar animated now={html} label={`${html}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>CSS</p>
                        <ProgressBar animated now={css} label={`${css}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>JAVASCRIPT</p>
                        <ProgressBar animated now={80} label={`${80}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>REACTJS</p>
                        <ProgressBar animated now={80} label={`${80}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>NODEJS</p>
                        <ProgressBar animated now={65} label={`${65}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>MONGODB</p>
                        <ProgressBar animated now={60} label={`${60}%`} />
                    </div>
                    <div className="col-lg-4 pb-5">
                        <p>EXPRESS</p>
                        <ProgressBar animated now={50} label={`${50}%`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;