import { WrapItem, Link, Text } from '@chakra-ui/react';
import { Offer } from '.';
import StatList from './StatList';

interface Props {
  offer: Offer;
}

const ListItem = (props: Props) => {
  const { offer } = props;
  const { statistics } = offer;

  return (
    <WrapItem>
      <Link>
        <Text>{offer.name}</Text>
        <Text>{offer.price}</Text>
        <StatList statistics={statistics} />
      </Link>
    </WrapItem>
  )
}

export default ListItem