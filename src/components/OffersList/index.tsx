import Header from './Header';
import List from './List';
import { chakra, Container } from '@chakra-ui/react';

export interface Statistic {
  label: string;
  value: number;
}

export interface Offer {
  id: string;
  name: string;
  price: number;
  statistics: Statistic[];
  isRecommended: boolean;
}

export const allOffers: Offer[] = [
  {
    id: '0',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    statistics: [
      { label: 'No of reviews', value: 10 },
      { label: 'Seller Score', value: 0.6 },
      { label: 'Rating', value: 2 },
    ],
    isRecommended: false,
  },
  {
    id: '1',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    statistics: [
      { label: 'No of reviews', value: 10 },
      { label: 'Seller Score', value: 0.6 },
      { label: 'Rating', value: 2 },
    ],
    isRecommended: false,
  },
  {
    id: '2',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    statistics: [
      { label: 'No of reviews', value: 10 },
      { label: 'Seller Score', value: 0.6 },
      { label: 'Rating', value: 2 },
    ],
    isRecommended: false,
  }
];

const index = () => {
  return (
    <chakra.main bg={"gray.50"} py={6}>
      <Container maxW="1200px">
        <Header />
        <List />
      </Container>
    </chakra.main>
  )
}

export default index;