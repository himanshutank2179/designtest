import React from 'react';
import ReactWOW from 'react-wow'

const FeatureDetailLeft = ({image, title, desc}) => {
    return (
        <div className="bg_color_1 container-fluid">
            <div className="row mt-5 p-5">
                <div className="col-lg-5 col-sm-12 col-xs-12 text-center">
                    <figure>
                        <ReactWOW animation='slideInLeft'>
                            <img
                                className="img-fluid fix-width"
                                src={image}/>
                        </ReactWOW>
                    </figure>
                </div>
                <div className="col-lg-7 col-sm-12 col-xs-12 d-flex align-items-center">
                    <div className="text-center">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetailLeft;