import Header from './Header';
import List from './List';
import { Divider, Container, chakra } from '@chakra-ui/react';

const ModelList = () => {
  
  return (
    <chakra.main bg="gray.50" py={6}>
        <Container maxW="1200px">
          <Header />
          <Divider mb={4} />
          <List />
        </Container>
    </chakra.main>
  )
}

export default ModelList;