import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';
import { allOffers } from '.';

const List = () => {
  return (
    <Wrap spacingY={4}>
      { allOffers.map((offer) => <ListItem offer={offer} key={offer.id} />) } 
    </Wrap>
  )
}

export default List