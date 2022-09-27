import Header from '../components/Header/Header';
import ModelList from '../components/ModelList';
import { Divider, useToast, chakra } from '@chakra-ui/react';
import { useEffect } from 'react';
import Reviews from '../components/Reviews/Reviews';

const Home = () => {
  const toast = useToast();

  useEffect(() => {
    const toastTimeoutId = setTimeout(() => {
      toast({
        title: 'Inspired by my obsession with Macbooks 😂',
        description: "Let's find one for you!",
        status: 'info',
        duration: 6000,
        isClosable: true,
      });
    }, 2000);

    return () => {
      clearTimeout(toastTimeoutId);
    }
  }, []);

  return (
    <div>
      <Header />
      <ModelList />
      <Divider />
      <Reviews />
    </div>
  )
}

export default Home;