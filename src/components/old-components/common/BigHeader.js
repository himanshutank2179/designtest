import React from 'react';

const BigHeader = ({title, subTitle}) => {
    return (
        <div className="main_title_2">
            <span><em></em></span>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default BigHeader;