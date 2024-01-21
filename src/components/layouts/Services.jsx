import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Container from '../Container';
import ServicesCard from '../ServicesCard';
import Flex from '../Flex';
import imgSix from '../../assets/Layer_x0020_1.png';
import imgFive from '../../assets/Frame (2).png';
import imgFour from '../../assets/Frame (1).png';
import imgThree from '../../assets/Group 23.png';
import imgTwo from '../../assets/Vector.png';
import imgOne from '../../assets/Group 22.png';


const Services = () => {
    return (
        <Container>
          <div className="text-center">
          <Heading as="h2" text="Our Provided Services" className="text-[45px] font-bold"/> 
           <Paragraph text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-[#737373] text-[16px] font-normal leading-[26px] w-[609px] pt-[20px] mx-auto pb-8"/>
          </div>
       <div className='mb-[100px]'>
       <Flex className={`gap-8 py-6`}>
        <ServicesCard serviceImgSrc={ imgOne } serviceHeadingText="Web Design" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        <ServicesCard serviceImgSrc={imgTwo} serviceHeadingText="UI/UX Design" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        <ServicesCard serviceImgSrc={ imgThree} serviceHeadingText="Web Development" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        </Flex>
        <Flex className={`gap-8 py-6`}>
        <ServicesCard serviceImgSrc={imgFour} serviceHeadingText="Motion Graphics" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        <ServicesCard serviceImgSrc={imgFive} serviceHeadingText="3D Animation" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        <ServicesCard serviceImgSrc={imgSix} serviceHeadingText="Digital Marketing" serviceParaText="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        </Flex>
       </div>
        </Container>
    );
};

export default Services;