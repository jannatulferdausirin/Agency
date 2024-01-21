import React from 'react';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';

const ChosseAgencyCard = ({agencyPara,agencyHeading,agencyImage} ) => {
    return (
        <div>
            <Image src={agencyImage}/>
            <Heading as="h4" text={agencyHeading} className="text-[25px] font-bold " />
            <Paragraph text={agencyPara} className={`text-[16px] font-normal leading-[26px] w-[344px]`}/>
        </div>
    );
};

export default ChosseAgencyCard;