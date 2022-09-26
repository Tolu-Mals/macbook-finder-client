import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';
import { allOffers } from '.';

const List = () => {
  return (
    <Wrap>
      { allOffers.map((offer) => <ListItem offer={offer} key={offer.id} />) } 
    </Wrap>
  )
}

export default List