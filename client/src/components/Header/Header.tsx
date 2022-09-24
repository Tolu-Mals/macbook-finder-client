import * as React from 'react';
import Navbar from '../Navbar/Navbar';

import { Center, Heading, Button, Image } from '@chakra-ui/react';
import FinderLogo from '../../assets/images/finder_logo.png';

const Header = () => {
  return (
    <header>
        <Navbar />
        <Center
        flexDirection={"column"}
        textAlign={"center"}
        >
            <Center>
                <Image src={FinderLogo} />
            </Center>
            <Heading as="h1">Macbook Finder</Heading>
            <p>Get the best deal on Macbooks from Jumia using info from our custom web crawler.</p>
            <Button>Find a Macbook</Button>
        </Center>
        
    </header>
  )
}

export default Header;