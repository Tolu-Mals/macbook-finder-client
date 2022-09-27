import { Container, Center, Heading, Box, Image } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

interface Props {
  imageUrl?: string;
  name?: string;
}

const index = (props: Props) => {
  const { imageUrl, name } = props;

  const productImageComp = (
    <Box>
      <Image src={imageUrl} />
    </Box>
  );

  return (
    <Container>
      <Navbar />
      <Center flexDirection={'column'}>
          { productImageComp }
          <Heading as="h1">{name}</Heading>
      </Center>
    </Container>
  )
}

export default index