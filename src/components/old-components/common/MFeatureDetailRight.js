import React from 'react';
import ReactWOW from "react-wow";

const MFeatureDetailLeft = ({image, title, desc}) => {
    return (
        <div className="row bg_color_1">
            <div className="col-md-12 p-5">
                <div className="text-center">
                    <h4>{title}</h4>
                    <p>{desc}</p>

                </div>
            </div>
            <div className="col-md-12 text-center">
                <figure>
                    <ReactWOW animation='slideInRight'>
                    <img
                        className="img-fluid m-img"
                        src={image}/>
                    </ReactWOW>
                </figure>
            </div>
        </div>
    );
};

export default MFeatureDetailLeft;