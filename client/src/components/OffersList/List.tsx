import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';
import { allOffers } from '.';

const List = () => {
  return (
    <Wrap>
      { allOffers.map((offer) => <ListItem offer={offer} />) } 
    </Wrap>
  )
}

export default List