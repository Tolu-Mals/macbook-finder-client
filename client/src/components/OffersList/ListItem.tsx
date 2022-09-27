import { WrapItem, Link, Text } from '@chakra-ui/react';
import { Offer } from '.';
import StatList from './StatList';

interface Props {
  offer: Offer;
}

const ListItem = (props: Props) => {
  const { offer } = props;
  const { statistics } = offer;

  const formattedPrice = Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', currencyDisplay: 'narrowSymbol' }).format(offer.price);

  return (
    <WrapItem w="100%" bg="white" p={4}>
      <Link w="100%">
        <Text
        sx={{
          fontWeight: 500,
          fontFamily: "'Poppins', sans-serif"
        }}
        >
          {offer.name}
        </Text>

        <Text
        sx={{
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "4xl",
          marginBottom: 3
        }}
        >
          {formattedPrice}
        </Text>

        <StatList statistics={statistics} />
      </Link>
    </WrapItem>
  )
}

export default ListItem