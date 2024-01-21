import React from 'react';

const Button = ({text, className}) => {
    return (
      <button className={`bg-violet-600 text-white hover:text-violet-600 hover:bg-white px-[42px] py-[15px] rounded-xl duration-300 ease-in font-inter hover:font-bold ${className}`}>{text}</button>
    );
};

export default Button;