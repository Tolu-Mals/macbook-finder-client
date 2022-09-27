import { 
  Text, 
  Flex,
  chakra
} from '@chakra-ui/react';
import SortingDropdown from './SortingDropdown';
import { allOffers } from '.';


const Header = () => {
  return (
    <chakra.header mb={6}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={["md","lg"]} fontWeight={700} fontFamily={"'Poppins', sans-serif"}>
            All Offers ({allOffers.length})
          </Text>
          <SortingDropdown />
        </Flex>
    </chakra.header>
  )
}

export default Header;