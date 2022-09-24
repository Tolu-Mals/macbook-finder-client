import * as React from 'react';
import { Flex, Spacer, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
    justifyContent="space-between"
    >
        <Link href="#">Twitter</Link>
        <Link href="#">Github</Link>
    </Flex>
  )
}

export default Navbar;