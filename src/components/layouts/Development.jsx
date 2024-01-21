import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Section from "../Section";
import Flex from "../Flex";
import Button from "./Button";
import Label from "../Label";
import Input from "../Input";

const Development = () => {
  return (
    <Section className="bg-[#F3F3F3] rounded">
      <Container>
        <Flex>
          <div className="py-[320px]">
            <Heading
              as="h3"
              text="We Do design, Code & Development"
              className="text-[45px] font-bold w-[470px] pb-4 "
            />
            <Paragraph
              text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
              className={`text-[16px] font-normal text-[#7B7B7B] leading-[26px] w-[514px] `}
            />
            <Paragraph
              text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
              className={`text-[16px] font-normal text-[#7B7B7B] leading-[26px] pt-[10px] w-[514px]  `}
            />
          </div>
          <div className="w-[536px] bg-[#FFF] h-[622px] rounded my-[150px] ml-[146px] text-center">
            <Heading
              as="h3"
              text="Get a free quote now"
              className="text-[30px] font-bold pt-[61px]"
            />
            <div className="">
              <Label labelName="Name" className={`text-left pl-[45px] pb-2 text-[16px] font-medium text-[#151515]`} />
              <Input inputType="text" inputPh="Enter Your Name" className={`mb-2 pl-2`}/>

              <Label labelName="Email" className={`text-left pl-[45px] pb-2 text-[16px] font-medium text-[#151515]`} />
              <Input inputType="text" inputPh="Enter Your Email" className={`mb-2 pl-2`}/>

              <Label labelName="Name" className={`text-left pl-[45px] pb-2 text-[16px] font-medium text-[#151515]`} />
              <Input inputType="text" inputPh="Enter Your Phone Number" className={`mb-2 pl-2`}/>
            </div>
            <Button
              text="Get Pricing Now"
              className={`text-[20px] font-semibold leading-[26px] w-[450px] hover:bg-violet-800 hover:text-sky-300   mt-4`}
            />
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Development;
