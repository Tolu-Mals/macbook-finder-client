import Header from './Header';
import List from './List';
import { Divider, Container, chakra } from '@chakra-ui/react';

const ModelList = () => {
  
  return (
    <chakra.main bg="gray.50" pt={6}>
        <Container>
          <Header />
          <Divider mb={4} />
          <List />
        </Container>
    </chakra.main>
  )
}

export default ModelList;