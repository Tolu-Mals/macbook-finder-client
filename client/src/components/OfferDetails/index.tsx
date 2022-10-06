import { chakra, Container, Flex, Box, Image, HStack, VStack, Heading, Text, Button, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import boxImg from '../../assets/images/box.png';
import badgeImg from '../../assets/images/badge.png';
import StatItem from './StatItem';
import { Details } from '../../pages/Details';

interface Props {
  details: Details
}

const index = (props: Props) => {
  const { details } = props;

  const leadTextStyle = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
    color: 'gray.400',
    fontSize: 'sm',
    marginBottom: 6,
    width: { base: 'auto', md: '80%'}
  }

  const linkIconComp = (
    <Center bgColor="#B5D0FA" p={2} borderRadius={4}><ArrowForwardIcon color="#5296FF" /></Center>
  );

  return (
    <chakra.main bg={"gray.50"} py={4}>
      <Container maxW="1200px">
        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '0', md: 4 }}>
          <Flex flexDirection={"column"} flex={1}>
            <HStack mb={3}>
              <Box w="15%" mr={2}><Image src={boxImg} alt="Box illustration"/></Box>
              <Heading size="lg">Product Details</Heading>
            </HStack>
            <Text sx={leadTextStyle}>Here’s what you need to know about this product offer to help you make your best buying decision</Text>
            <Flex w="100%" flexDirection={{ base: 'column', md: 'row' }} alignItems={"flex-start"}>
              <StatItem statistic={{ label: "Price", value: details?.price}} />
              <Flex>
                <StatItem statistic={{ label: "Star Rating", value: details?.starRating }}/>
                <StatItem statistic={{ label: "Reviews", value: details?.noOfReviews }}/>
              </Flex>
            </Flex>
            <Button 
            as='a' 
            href={details.url} 
            variant="link" 
            rightIcon={linkIconComp} 
            color={"#5296FF"} 
            size="lg"
            my={4}
            mr={'auto'}
            mt={'auto'}
            >
              See on Jumia
            </Button>
          </Flex>
          <Flex flexDirection="column" flex={1}>
            <HStack mt={3} w="100%">
              <Box w="15%" mr={2}><Image src={badgeImg} alt="Badge illustration"/></Box>
              <Heading size="lg">Seller Information</Heading>
            </HStack>
            <Text sx={leadTextStyle}>Take a look at some useful information about the person who is selling this product</Text>
            <Flex flexDirection={{ base: 'row' }} w="100%">
              <Flex flexDirection={{ base: 'column' }} flex={1}>
                <StatItem statistic={{ label: "Name", value: details?.seller?.name }}/>
                <StatItem statistic={{ label: "Followers", value: details?.seller?.followers }}/>
                <StatItem statistic={{ label: "Seller Score", value: details?.seller?.sellerScore }}/>
              </Flex>
              <Flex flexDirection={{ base: 'column' }} flex={1}>
                <StatItem statistic={{ label: "Quality Score", value: details?.seller?.qualityScore }}/>
                <StatItem statistic={{ label: "Customer Rating", value: details?.seller?.customerRating }}/>
                <StatItem statistic={{ label: "Order Fulfillment Rate", value: details?.seller?.orderFulfillmentRate }}/>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </chakra.main>
  )
}

export default index;