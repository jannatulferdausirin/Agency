import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import Paragraph from '../Paragraph';
import logo from '../../assets/Group 3.png';
import Heading from '../Heading';
import FooterMenu from '../FooterMenu';

const Footer = () => {
    return (
        <Container>
            <Flex className={`justify-between gap-4 pt-[100px] pb-[30px]`}>
                <div>
                <Image src={logo }/>
                <Paragraph text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." className={`w-[356px] text-[#7B7B7B] text-[16px] font-normal pt-6`}/>
                </div>
                <div>
                   
                <Heading as="h3" text="About" className="text-[20px] font-semibold pb-4"/>
                    <FooterMenu footerMenu="Features"/>
                    <FooterMenu footerMenu="News"/>
                    <FooterMenu footerMenu="Careers"/>
                </div>
                <div>
                    <Heading as="h3" text="Company" className="text-[20px] font-semibold pb-4"/>
                    <FooterMenu footerMenu="Our Team"/>
                    <FooterMenu footerMenu="Partner with us"/>
                    <FooterMenu footerMenu="
                    FAQ"/>
                    <FooterMenu footerMenu="Blog"/>
                </div>
                <div>
                    <Heading as="h3" text="Support" className="text-[20px] font-semibold pb-4"/>
                    <FooterMenu footerMenu="About"/>
                    <FooterMenu footerMenu="
                    Support Center"/>
                    <FooterMenu footerMenu="Feedback"/>
                    <FooterMenu footerMenu="Contact Us"/>
                    <FooterMenu footerMenu="Accesbility"/>
                </div>
                <div>
                    <Heading as="h3" text="Get in touch" className="text-[20px] font-semibold pb-4"/>
                    <FooterMenu footerMenu="info@gmail.com"/>
                    <FooterMenu footerMenu="
                    +88 0121 0212r"/>
                  
                </div>
            </Flex>
            <div className='py-6 text-center border-t-2 border-gray-300 opacity-50'>
                <FooterMenu footerMenu="All credit goes to @agence.com"/> 
            </div>
        </Container>
    );
};

export default Footer;