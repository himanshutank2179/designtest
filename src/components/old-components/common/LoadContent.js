import ContentLoader from "react-content-loader"

import React from 'react';

const LoadContent = ({numberOfLines}) => {

    let rows = <rect x="25" y="15" rx="5" ry="5" width="100%" height="20"/>;

    for (var i = 0; i < numberOfLines; i++) {
        rows += <rect x="25" y="15" rx="5" ry="5" width="100%" height="20"/>;
    }

    return (
        <ContentLoader
            height={160}
            width={400}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb">
            {rows}
        </ContentLoader>
    );
};

export default LoadContent;