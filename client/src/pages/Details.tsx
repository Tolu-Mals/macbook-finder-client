import { useParams } from 'react-router-dom';
import { Container, Center, Box, Image, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import { allModels } from '../components/ModelList/List';

const Details = () => {
  const { id } = useParams();
  let modelData = allModels.find((model) => model.id === id);
  const imageUrl = modelData ? modelData.image : undefined;
  const name = modelData ? modelData.name : undefined; 

  return (
    <Container>
        <Navbar />
        <Center>
            <Box>
              <Image src={imageUrl} />
              <Heading>{name}</Heading>
            </Box>
        </Center>
    </Container>
  )
}

export default Details;