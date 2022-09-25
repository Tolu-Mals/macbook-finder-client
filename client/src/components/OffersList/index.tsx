import { Wrap } from '@chakra-ui/react';
import Header from './Header';

export const allOffers = [
  {
    index: '0',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    noOfReviews: 10,
    sellerScore: 0.6,
    rating: 2,
    isRecommended: false,
  },
  {
    index: '1',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    noOfReviews: 10,
    sellerScore: 0.6,
    rating: 2,
    isRecommended: false,
  },
  {
    index: '2',
    name: 'Fire Nation Computing Ltd.',
    price: 1000000,
    noOfReviews: 10,
    sellerScore: 0.6,
    rating: 2,
    isRecommended: false,
  }
];

const index = () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default index;