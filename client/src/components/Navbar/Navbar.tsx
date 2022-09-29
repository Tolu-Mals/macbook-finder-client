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
          href="#" 
          fontFamily={"Poppins"}
          mb={1}
          _hover={{
            border: "none"
          }}
          >
            Twitter
          </Link>
          { roundedBorder }
        </Flex>

        <Flex alignItems={"self-start"} flexDirection={"column"}>
          <Link 
          href="#"
          fontFamily={"Poppins"}
          mb={1}
          _hover={{
            border: "none"
          }}
          >
            Github
          </Link>
          { roundedBorder }
        </Flex>
    </Flex>
  )
}

export default Navbar;