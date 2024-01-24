import React from 'react';
import Container from './Container';
import Flex from './Flex';
import Image from './Image';
import List from './List';
import LogoImage from '../assets/Group 3.png';
import Button from './layouts/Button';



const Navbar = () => {
    return (
        <Container className={``}>
      
        <Flex className={`items-center justify-between pt-[56px] `}>
        <Image src={LogoImage } alt="logoImg" className={``}/>
           <Flex className={`gap-8 text-white`}>
           <List to="/home" text="Home" className={``}/>
            <List to="/about" text="About" />
            <List to="/service" text="Service" />
            <List to="/carriers" text="Carriers" />
            <List to="/contacts" text="Contacts" />
           </Flex>
               <Button text="Contact"/>
   
        </Flex>
           </Container>
    );
};

export default Navbar;