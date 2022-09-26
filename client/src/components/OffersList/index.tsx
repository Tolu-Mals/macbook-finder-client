import Header from './Header';
import List from './List';

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
    <main>
      <Header />
      <List />
    </main>
  )
}

export default index;