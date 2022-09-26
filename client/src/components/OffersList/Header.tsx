import { 
  Heading, 
  Flex
} from '@chakra-ui/react';
import SortingDropdown from './SortingDropdown';
import { allOffers } from '.';


const Header = () => {
  return (
    <header>
      <Flex>
        <Heading>All Offers ({allOffers.length})</Heading>
        <SortingDropdown />
      </Flex>
    </header>
  )
}

export default Header;