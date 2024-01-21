import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import RecentWorkCard from '../RecentWorkCard';
import Flex from '../Flex';
import recentImgOne from '../../assets/Rectangle 29.jpg';
import recentImgTwo from '../../assets/Rectangle 29 (1).jpg';
import recentImgThree from '../../assets/Rectangle 29 (1).png';
import recentImgFour from '../../assets/Rectangle 29.png';
import recentImgFive from '../../assets/Rectangle 29 (2).png';
import recentImgsix from '../../assets/Rectangle 29 (3).png';
import Section from '../Section';


const RecentWork = () => {
    return (
        <Section className="bg-[#F3F3F3] pb-[150px]">
            
       
        <Container>
            <div className="pt-[150px] pb-8 text-center">
          <Heading as="h2" text="Our Recent Work" className="text-[45px] font-bold"/> 
           <Paragraph text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-[#737373] text-[16px] font-normal leading-[26px] w-[609px] pt-[20px] mx-auto pb-8"/>
          </div>
          <div >
           <Flex className={`gap-6 py-8`}>
           <RecentWorkCard recentImgSrc={recentImgOne} recentHeadingText="Task Management App"/>
           <RecentWorkCard recentImgSrc={recentImgTwo} recentHeadingText="Saas Landing Page Design"/>
           <RecentWorkCard recentImgSrc={ recentImgThree} recentHeadingText="App Design"/>
           </Flex>
           <Flex className={`gap-6 py-8`}>
           <RecentWorkCard recentImgSrc={recentImgFour } recentHeadingText="Landing Page Design"/>
           <RecentWorkCard recentImgSrc={recentImgFive} recentHeadingText="Dashboard Design"/>
           <RecentWorkCard recentImgSrc={ recentImgsix} recentHeadingText="Web App Design"/>
           </Flex>
          </div>
        </Container>
        </Section>
    );
};

export default RecentWork;