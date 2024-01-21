import React from 'react';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';

const RecentWorkCard = ({recentHeadingText,recentImgSrc} ) => {
    return (
        <div className='w-[424px] justify-center text-center rounded-[20px] bg-[#FFF] hover:shadow-xl  hover:border duration-100 ease-in hover:shadow-gray-400 pb-8'>
        <Image src={recentImgSrc} alt="" className={`pb-4 `}/>
        <Heading as="h3" text={recentHeadingText} className="text-[25px] font-bold "/>
        <Paragraph text="This is a task management application that can help you be more " className={`text-[16px] font-normal leading-[26px] text-[#737373] w-[326px] pt-[20px] mx-auto`}/>
    </div>
    );
};

export default RecentWorkCard;