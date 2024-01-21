import React from 'react';

const List = ({href, text,className}) => {
    return (
        <ul>
        <li> <a href={href} className={` hover:text-violet-600 duration-300 ease-in text-[18px] font-bold leading-[26px] font-inter ${className}`}>{text}</a>
     </li>
        </ul>
    );
};

export default List;