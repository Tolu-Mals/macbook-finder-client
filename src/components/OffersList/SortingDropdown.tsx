import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const SortingDropdown = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={["sm","md"]}>
        Sort By Price
      </MenuButton>
      <MenuList>
        <MenuItem>Highest to lowest price</MenuItem>
        <MenuItem>Lowest to highest price</MenuItem>
        <MenuItem>Highest to lowest star rating</MenuItem>
        <MenuItem>Highest to lowest no of reviews</MenuItem>
        <MenuItem>Highest to lowest seller score</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortingDropdown;