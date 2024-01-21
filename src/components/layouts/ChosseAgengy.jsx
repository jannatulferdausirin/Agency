import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Image from "../Image";
import agencyImage from "../../assets/Group 41 (1).png";
import agencyImageTwo from "../../assets/Group 46.png";
import agencyImageThree from "../../assets/Rectangle 29 (2).jpg";
import ChosseAgencyCard from "../ChosseAgencyCard";

const ChosseAgengy = () => {
  return (
    <Container>
      <div className="pt-[150px] pb-8 text-center">
        <Heading
          as="h2"
          text="Why You Should Choose Agenc    "
          className="text-[45px] font-bold w-[500px] inline-block"
        />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          className="text-[#737373] text-[16px] font-normal leading-[26px] w-[609px] pt-[20px] mx-auto pb-8"
        />
      </div>
      <Flex className={`justify-between py-16 `}>
        <div>
          <Flex className={`gap-12 pb-[95px]`}>
            <ChosseAgencyCard
              agencyImage={agencyImage}
              agencyHeading="Innovative Ideas"
              agencyPara="Because each project is different, we adapt to your business model."
            />
            <ChosseAgencyCard
              agencyImage={agencyImage}
              agencyHeading="Innovative Ideas"
              agencyPara="Because each project is different, we adapt to your business model."
            />
          </Flex>
          <Flex className={`gap-12 `}>
            <ChosseAgencyCard
              agencyImage={agencyImageTwo}
              agencyHeading="Dedicated Support"
              agencyPara="We provide 24/7 support for all our clients and serve them professionally."
            />
            <ChosseAgencyCard
              agencyImage={agencyImageTwo}
              agencyHeading="Dedicated Support"
              agencyPara="We provide 24/7 support for all our clients and serve them professionally."
            />
          </Flex>
        </div>
        <Image src={agencyImageThree} className={``} />
      </Flex>
    </Container>
  );
};

export default ChosseAgengy;
