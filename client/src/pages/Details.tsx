import { useParams } from 'react-router-dom';
import { Container, Center, Box, Image, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import { allModels } from '../components/ModelList/List';
import OffersList from '../components/OffersList';


const Details = () => {
  const { id } = useParams();
  let modelData = allModels.find((model) => model.id === id);
  const imageUrl = modelData ? modelData.image : undefined;
  const name = modelData ? modelData.name : undefined;

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
        <OffersList />
    </Container>
  )
}

export default Details;