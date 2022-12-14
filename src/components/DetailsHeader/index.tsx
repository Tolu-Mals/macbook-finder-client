import { Container, Center, Heading, Box, Image, chakra, Text, VStack } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

interface Props {
  imageUrl?: string;
  name?: string;
}

const index = (props: Props) => {
  const { imageUrl, name } = props;

  const productImageComp = (
    <Box mb={4} flex={[1,1,0.5]}>
      <Box sx={{
        h: '200px',
        w: '288px',
        overflow: 'hidden',
        'img': {
          marginTop: '-40px'
        }
      }}>
        <Image src={imageUrl} />
      </Box>
    </Box>
  );

  return (
    <chakra.header py={4} bg={"white"}>
      <Container maxW="1200px">
        <Navbar />
        <Center flexDirection={['column', 'column', 'row']} pt={[4, 4, 8]} pb={4} gap={[0,0,14]}>
            { productImageComp }
            <VStack alignItems={"flex-start"} flex={[1,1,1]}>
              <Text sx={{
                fontWeight: 500,
                color: "gray.400",
                visibility: ["hidden", "hidden", "visible"],
                fontFamily: "'Poppins', sans-serif"
              }}>Product Model</Text>
              <Heading 
              as="h1"
              size={["md","md", "md", "lg"]}
              sx={{
                textAlign: ['center', 'left', 'left'],
                fontWeight: 700,
                
              }}
              >{name}</Heading>
            </VStack>
        </Center>
      </Container>
    </chakra.header>
  )
}

export default index