import React, { useEffect } from 'react';
import './Project.css'
import car from '../../images/project/car.png'
import health from '../../images/project/health.png'
import agency from '../../images/project/agency.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Project = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div className='project-section' id='project'>
            <div className='container p-4'>
                <h1 class='p-5 text-center text-white'>My Projects</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div data-aos="fade-up" class="card h-100 p-2">
                            <img src={car} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title ">Car Shop</h5>
                                <p class="card-text">This website is fully responsive with Material Ui also in this website using firebase authentication system.</p>
                                <hr />
                                <a target='_blank' href="https://github.com/shakil-1318/car-shop-client">
                                    <span ><i class="fab fa-github profile-icon"></i></span>
                                </a>
                                <a target='_blank' href="https://github.com/shakil-1318/car-shop-server">
                                    <span ><i class="fab fa-github profile-icon"></i></span>
                                </a>
                                <a target='_blank' href="https://car-shop-4f567.web.app/">
                                    <span ><i class="fas fa-external-link-alt profile-icon"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div data-aos="zoom-in" class="card h-100" >
                            <img src={health} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Medics Health Care</h5>
                                <p class="card-text">Medics health care is a fully responsive single page application website by using firebase authentication and React-Bootstap framework uses.</p>
                                <hr />
                                <a target='_blank' href="https://github.com/shakil-1318/medics-health-care">
                                    <span ><i class="fab fa-github profile-icon"></i></span>
                                </a>
                                <a target='_blank' href="https://medics-health-care-be077.web.app/">
                                    <span ><i class="fas fa-external-link-alt profile-icon"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div data-aos="fade-down" class="card h-100" >
                            <img src={agency} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Creative Agency (Coming Soon)</h5>
                                <p class="card-text">Coming Soon ......</p>
                                <hr />
                                <a target='_blank' href="https://github.com/shakil-1318/medics-health-care">
                                    <span ><i class="fab fa-github profile-icon"></i></span>
                                </a>
                                <a target='_blank' href="https://medics-health-care-be077.web.app/">
                                    <span ><i class="fas fa-external-link-alt profile-icon"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;