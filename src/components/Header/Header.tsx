import Navbar from '../Navbar/Navbar';
import { Center, Heading, Button, Image, Text, Container, chakra } from '@chakra-ui/react';
import FinderLogo from '../../assets/images/finder_logo.png';

const Header = () => {
  return (
    <chakra.header bg="white" pt={4}>
      <Container maxW="1200px">
        <Navbar />
        <Center
          flexDirection={"column"}
          textAlign={"center"}
          w={["100%", "60%", "50%", "37%"]}
          ml={"auto"}
          mr={"auto"}
          pt={8}
          pb={14}
        >
          <Center w={"50%"} pb={3}>
            <Image src={FinderLogo} />
          </Center>
          <Heading
            as="h1"
            fontWeight={800}
            fontSize={["2rem", "2.5rem",]}
            color="gray.800"
            pb={2}
          >
            Macbook Finder
          </Heading>
          <Text
            fontFamily={"heading"}
            fontWeight={600}
            color="gray.400"
            pb={3}
            fontSize={["0.9rem", "1rem"]}
          >
            Get the best deal on Macbooks from Jumia using data from our custom web crawler.</Text>
          <Button
            bg="brand.300"
            fontFamily={"heading"}
            color="white"
            size="lg"
            borderRadius={25}
            px={8}
            _hover={{
              backgroundColor: 'brand.400'
            }}
            fontSize={["0.9rem", "1rem",]}
            as="a"
            href="#models"
          >
            Find a Macbook
          </Button>
        </Center>
      </Container>
    </chakra.header>
  )
}

export default Header;
