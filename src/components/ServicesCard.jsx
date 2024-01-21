import React from 'react';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';
// import serviceImg from '../assets/Group 22.png';


const ServicesCard = ({serviceImgSrc,serviceHeadingText,serviceParaText } ) => {
    return (
        <div className='w-[424px] justify-center text-center rounded-[20px] bg-[#FFF] hover:shadow-xl  hover:border duration-100 ease-in hover:shadow-gray-400 pb-8'>
            <Image src={serviceImgSrc} alt="" className={`pt-[80px] pb-[40px] inline-block`}/>
            <Heading as="h3" text={serviceHeadingText} className="text-[25px] font-bold "/>
            <Paragraph text={serviceParaText} className={`text-[16px] font-normal leading-[26px] text-[#737373] w-[326px] pt-[20px] mx-auto`}/>
        </div>
    );
};

export default ServicesCard;