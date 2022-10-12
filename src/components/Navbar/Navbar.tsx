import { Flex, Link, chakra } from '@chakra-ui/react';

const roundedBorder = (
  <chakra.div sx={{
    height: '3px',
    width: '40px',
    backgroundColor: "brand.300",
    borderRadius: '1.5px',
  }}></chakra.div>
)

const Navbar = () => {
  return (
    <Flex
    justifyContent="space-between"
    >
        <Flex alignItems={"self-start"} flexDirection={"column"}>
          <Link 
          href="https://twitter.com/tolulopemalomo" 
          fontFamily={"Poppins"}
          fontWeight={600}
          mb={1}
          _hover={{
            border: "none"
          }}
          target="_blank"
          >
            Twitter
          </Link>
          { roundedBorder }
        </Flex>

        <Flex alignItems={"self-start"} flexDirection={"column"}>
          <Link 
          href="https://gist.github.com/Tolu-Mals/5ddb48862f99e82b820d0d0762e75558"
          fontWeight={600}
          fontFamily={"Poppins"}
          mb={1}
          _hover={{
            border: "none"
          }}
          target="_blank"
          >
            Github
          </Link>
          { roundedBorder }
        </Flex>
    </Flex>
  )
}

export default Navbar;