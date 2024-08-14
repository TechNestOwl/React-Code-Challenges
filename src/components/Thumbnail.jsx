import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoundThumbNail = ({src, alt, size }) =>{
    const thumbNailStyle =  {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `50%`,
        objectFit: 'cover',
    };

    return (
        <img 
            src={src}
            alt={alt}
            style={thumbNailStyle}
            className="img-thumbnail"
        />
    );
};

export default RoundThumbNail;