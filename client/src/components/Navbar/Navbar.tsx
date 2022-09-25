import { Flex, Link, IconButton } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
    justifyContent="space-between"
    >
        <Link href="#">Twitter</Link>
        <IconButton aria-label="Toggle dark mode" icon={<SunIcon />} />
        <Link href="#">Github</Link>
    </Flex>
  )
}

export default Navbar;