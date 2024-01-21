import Section from "../Section";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "./Button";
import Navbar from "../Navbar";

const Banner = () => {
    return (
      <Section className="bg-center bg-no-repeat bg-cover bg-bannerImage ">
       <div className="bg-[#00000099]">
       <Container>
     
      <Navbar/>
          <div className="w-[950px] mx-auto text-center pt-[210px]">
          <Heading as="h1" text="We Help brands with high quality services" className={`text-[75px] font-bold leading-[90px]  text-[#FFF]`}/>
          <Paragraph text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className={`text-[16px] font-normal leading-[26px]  text-[#FFFF]  py-[52px]  w-[600px] mx-auto`}/>
          <Button text="Get Started" className={`mb-[176px]`}/>
        </div>
     
        
        </Container>
        </div>
      </Section>
    );
  };
  
  export default Banner;
  