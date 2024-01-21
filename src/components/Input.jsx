import React from 'react';

const Input = ({inputType,inputName,inputPh,inputValue, className}) => {
    return (
       <input type={inputType}  placeholder={inputPh} name={inputName} value={inputValue} className={` pt-2   pb-4   placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm   border border-gray-200 w-[450px] rounded-lg ${className}`}
       />
    );
};

export default Input;