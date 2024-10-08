import {
  chakra,
  Container,
  Flex,
  Box,
  Image,
  HStack,
  Heading,
  Text,
  Button,
  Center,
  Skeleton
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import boxImg from '../../assets/images/box.png';
import badgeImg from '../../assets/images/badge.png';
import StatItem from './StatItem';
import { Details } from '../../pages/Details';
import formatNumberAsNaira from '../../utils/formatNumberAsNaira'

interface Props {
  details?: Details
  isLoading: boolean
}

const index = (props: Props) => {
  const { details, isLoading } = props;

  const leadTextStyle = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    color: 'gray.500',
    fontSize: 'md',
    marginBottom: 6,
    width: { base: 'auto', md: '80%' }
  }

  const linkIconComp = (
    <Center bgColor="#B5D0FA" p={2} borderRadius={4}><ArrowForwardIcon color="#5296FF" /></Center>
  );

  const ProductSkeleton = () => {
    return (
      <Box mt={4}>
        <Box mb={5}>
          <Skeleton w="400px" h="80px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="450px" h="40px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Box>
        <Flex gap="20px">
          <Skeleton w="100px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="100px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="100px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Flex>
        <Skeleton w="150px" h="40px" startColor="gray.200" endColor="gray.300" mb={4} />
      </Box>
    )
  }

  const SellerSkeleton = () => {
    return (
      <Box mt={4}>
        <Box mb={5}>
          <Skeleton w="400px" h="80px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="450px" h="40px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Box>
        <Flex gap="40px" mb="20px">
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Flex>
        <Flex gap="40px" mb="20px">
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Flex>
        <Flex gap="40px" mb="20px">
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
          <Skeleton w="150px" h="50px" startColor="gray.200" endColor="gray.300" mb={4} />
        </Flex>
      </Box>
    )
  }

  return (
    <chakra.main bg={"gray.50"} py={4}>
      <Container maxW="1200px">
        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '0', md: 4 }}>
          <Flex flexDirection={"column"} flex={1} py={4} mb={4}>
            {isLoading && !details && <ProductSkeleton />}
            {details && <div>
              <HStack mb={3}>
                <Box w="15%" mr={2}><Image src={boxImg} alt="Box illustration" /></Box>
                <Heading size={{ base: 'md', lg: 'lg' }} color="gray.800">Product Details</Heading>
              </HStack>
              <Text sx={leadTextStyle}>Here’s what you need to know about this product offer to help you make your best buying decision</Text>
              <Flex w="100%" flexDirection={{ base: 'column', md: 'row' }} alignItems={"flex-start"} mb={8}>
                <StatItem statistic={{ label: "Price", value: details?.price ? formatNumberAsNaira(details.price) : '' }} />
                <Flex>
                  <StatItem statistic={{ label: "Star Rating", value: details?.starRating ?? 'Nil' }} />
                  <StatItem statistic={{ label: "Reviews", value: details?.noOfReviews ?? 'Nil' }} />
                </Flex>
              </Flex>
              <Button
                as='a'
                href={details?.url}
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
            </div>}
          </Flex>
          <Flex flexDirection="column" flex={1}>
            {isLoading && !details && <SellerSkeleton />}
            {details && (
              <div>
                <HStack mt={3} w="100%">
                  <Box w="15%" mr={2}><Image src={badgeImg} alt="Badge illustration" /></Box>
                  <Heading size={{ base: 'md', lg: 'lg' }} color="gray.800">Seller Information</Heading>
                </HStack>
                <Text sx={leadTextStyle}>Here's some useful information about the person who is selling this product</Text>
                <Flex flexDirection={{ base: 'row' }} w="100%">
                  <Flex flexDirection={{ base: 'column' }} flex={1}>
                    <StatItem statistic={{ label: "Name", value: details?.seller?.name }} />
                    <StatItem statistic={{ label: "Followers", value: details?.seller?.followers }} />
                    <StatItem statistic={{ label: "Seller Score", value: details?.seller?.sellerScore }} />
                  </Flex>
                  <Flex flexDirection={{ base: 'column' }} flex={1}>
                    <StatItem statistic={{ label: "Quality Score", value: details?.seller?.qualityScore }} />
                    <StatItem statistic={{ label: "Customer Rating", value: details?.seller?.customerRating }} />
                    <StatItem statistic={{ label: "Order Fulfillment Rate", value: details?.seller?.orderFulfillmentRate }} />
                  </Flex>
                </Flex>
              </div>
            )}
          </Flex>
        </Flex>
      </Container>
    </chakra.main>
  )
}

export default index;
