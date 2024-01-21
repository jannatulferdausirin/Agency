import React from 'react';
import Paragraph from './Paragraph';

const FooterMenu = ({footerMenu}) => {
    return (
        <div>
            <Paragraph text={footerMenu} className={`text-[#7B7B7B] text-16px font-normal leading-[40px] pb-2`}/>
        </div>
    );
};

export default FooterMenu;