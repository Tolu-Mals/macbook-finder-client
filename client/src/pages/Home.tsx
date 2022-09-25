import { Container } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import ModelList from '../components/ModelList';

const Home = () => {
  return (
    <Container>
      <Header />
      <ModelList />
    </Container>
  )
}

export default Home;