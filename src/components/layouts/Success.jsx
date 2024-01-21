import Section from '../Section';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Flex from '../Flex';

const Success = () => {
    return (
        <Section className={`py-[150px]`}>
            <Container>
                <Flex className={`bg-[#E0FFF9] rounded-[20px] justify-around py-16`}>
                    <div className=''>
                        <Heading as="h3" text=" Our Success" className="text-[#6A4DF4] text-[25px] font-medium font-inter leading-[30px] pb-2"/>
                        
                        <Heading as="h3" text="West cost Brand makers-Global Edge"className="text-[#151515] font-inter font-semibold text-[35px] w-[387px]" />
                    </div>
                    <div>
                    <Heading as="h3"  text=" 200+"  className="text-[#151515] font-inter font-semibold text-[35px] pb-2"/>
                        <Paragraph text="Customer Satisfied"  className={`text-[20px] font-medium font-inter leading-[30px] text-[#737373]`}/>
                    </div>
                    <div>
                    <Heading as="h3" text=" 4.5"  className="text-[#151515] font-inter font-semibold text-[35px] pb-2"/>
                        <Paragraph text="200+ Avg rating"  className={`text-[20px] font-medium font-inter leading-[30px] text-[#737373] `}/>
                    </div>
                    <div>
                    <Heading as="h3" text="351+"  className="text-[#151515] font-inter font-semibold text-[35px] pb-2"/>
                        <Paragraph text="Project Delivered"  className={`text-[20px] font-medium font-inter leading-[30px] text-[#737373] `}/>
                    </div>
                </Flex>
            </Container>
            
        </Section>
    );
};

export default Success;