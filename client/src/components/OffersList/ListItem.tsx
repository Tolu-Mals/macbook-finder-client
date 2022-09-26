import { WrapItem, Link, Text } from '@chakra-ui/react';
import { Offer } from '.';

interface Props {
  offer: Offer;
}

const ListItem = (props: Props) => {
  const { offer } = props;

  return (
    <WrapItem>
      <Link>
        <Text>{offer.name}</Text>
        <Text>{offer.price}</Text>
      </Link>
    </WrapItem>
  )
}

export default ListItem