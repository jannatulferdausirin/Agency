import React from "react";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import Heading from "./Heading";
import colonImg from "../assets/fontisto_quote-right.png";
import star from "../assets/Group 1354.png";

const ClientReviewCard = ({
  ClientImg,
  ClientName,
  ClientOccup,
  ClientText,
}) => {
  return (
    <div className="hover:bg-[#F4EFEF] px-[58px] pt-[70px] rounded-lg w-[424px] pb-[50px] duration-300 ease-out">
      <Image src={colonImg} />
      <Paragraph text={ClientText} className={`w-[307px] py-4`} />
      <Image src={star} />
      <div>
        <Flex className={`gap-4 py-4`}>
          <Image src={ClientImg} />
          <div>
            <Heading as="h4" text={ClientName} className="text-[20px] font-semibold"/>
            <Paragraph text={ClientOccup} className={`text-[16px] font-normal pt-1`}/>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default ClientReviewCard;
