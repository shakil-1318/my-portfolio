import React from 'react';
import Header from '../Header';
import home from '../../images/carshop/home.png'
import admin from '../../images/carshop/admin.png'
import user from '../../images/carshop/user.png'
import './CarShop.css'

const CarShop = () => {
    return (
        <div>
            <Header></Header>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={home} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={admin} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={user} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate ipsam iste accusantium hic quae, aspernatur placeat id harum eos quidem eaque cumque quasi. Consectetur facilis velit facere voluptatem iusto impedit quaerat necessitatibus, quia doloremque repellendus aliquam similique enim hic culpa totam sapiente odio cum delectus. Nulla suscipit cumque, mollitia nam quisquam id incidunt eaque placeat velit consequuntur maiores sit repudiandae. Dolorem cupiditate earum id explicabo natus ullam, laudantium accusantium! Fuga harum voluptate quibusdam libero earum laudantium consectetur nihil temporibus, quae, ex accusantium voluptatem. Eligendi laborum explicabo sequi adipisci, incidunt iure voluptas sit impedit corrupti alias! In voluptatum magni rerum.</p>
                </div>
            </div>
        </div>
    );
};

export default CarShop;