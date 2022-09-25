import { Heading, Flex } from '@chakra-ui/react';
import { allOffers } from '.';

const Header = () => {
  return (
    <header>
      <Flex>
        <Heading>All Offers ({allOffers.length})</Heading>
      </Flex>
    </header>
  )
}

export default Header;