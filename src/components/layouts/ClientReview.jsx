import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import ImageClient from "../../assets/Ellipse 31.png";
import ImageClientTwo from "../../assets/Ellipse 33.png";
import ClientReviewCard from "../ClientReviewCard";
import Flex from "../Flex";

const ClientReview = () => {
  return (
    <Container>
      <div className="pt-[100px] pb-4 text-center">
        <Heading
          as="h2"
          text="Some Client Reviews "
          className="text-[45px] font-bold w-[500px] inline-block"
        />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
          className="text-[#737373] text-[16px] font-normal leading-[26px] w-[609px] pt-[20px] mx-auto pb-[120px]"
        />
      </div>
     <Flex className={`justify-between gap-4 mb-[80px]`}>
     <ClientReviewCard ClientText="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." ClientImg={ImageClient} ClientName="Eric Drake" ClientOccup="Digital Marketor"/>
     <ClientReviewCard ClientText="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." ClientImg={ImageClient} ClientName="Eric Drake" ClientOccup="Digital Marketor"/>
     <ClientReviewCard ClientText="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." ClientImg={ImageClientTwo } ClientName="Rosa Farmer" ClientOccup="UI Designer"/>
     </Flex>
    </Container>
  );
};

export default ClientReview;
