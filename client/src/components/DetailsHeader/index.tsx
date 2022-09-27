import { Container, Center, Heading, Box, Image, chakra } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

interface Props {
  imageUrl?: string;
  name?: string;
}

const index = (props: Props) => {
  const { imageUrl, name } = props;

  const productImageComp = (
    <Box mb={4}>
      <Image src={imageUrl} />
    </Box>
  );

  return (
    <chakra.header py={4} bg={"white"}>
      <Container>
        <Navbar />
        <Center flexDirection={'column'} p={4}>
            { productImageComp }
            <Heading 
            as="h1"
            size="md"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
            }}
            >{name}</Heading>
        </Center>
      </Container>
    </chakra.header>
  )
}

export default index