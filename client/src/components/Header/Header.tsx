import * as React from 'react';
import Navbar from '../Navbar/Navbar';

import { Center, Heading, Box, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
        <Navbar />
        <Center
        flexDirection={"column"}
        textAlign={"center"}
        >
            {/* <Box boxSize={'sm'}>
                <Image />
            </Box> */}
            <Heading>Macbook Finder</Heading>
            <p>Get the best deal on Macbooks from Jumia using info from our custom web crawler.</p>
        </Center>
        
    </header>
  )
}

export default Header;