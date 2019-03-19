import React from 'react';

const SmallHeader = ({title, subTitle}) => {
    return (
        <div className="main_title_3">
            <span><em></em></span>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default SmallHeader;