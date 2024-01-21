import React from 'react';

const Paragraph = ({className,text}) => {
    return (
        <div className={`font-inter ${className}`}>
            {text}
        </div>
    );
};

export default Paragraph;