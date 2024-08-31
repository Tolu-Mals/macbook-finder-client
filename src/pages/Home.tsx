import Header from '../components/Header/Header';
import ModelList from '../components/ModelList';
import { Divider, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import Reviews from '../components/Reviews/Reviews';

let isOnBoarded = false;

const Home = () => {
  const toast = useToast();

  useEffect(() => {
    const toastTimeoutId = setTimeout(() => {
      if (!isOnBoarded) {
        toast({
          title: 'Inspired by my obsession with Macbooks 😂',
          description: "Let's find one for you!",
          status: 'info',
          duration: 6000,
          isClosable: true,
        });
        isOnBoarded = true;
      }
    }, 2000);

    return () => {
      clearTimeout(toastTimeoutId);
    }
  }, [toast]);

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
