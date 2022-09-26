import { Flex, Link, IconButton, Box, chakra } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';

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
          >
            Twitter
          </Link>
          { roundedBorder }
        </Flex>

        <IconButton aria-label="Toggle dark mode" icon={<SunIcon />} variant="link" size="lg"/>

        <Flex alignItems={"self-start"} flexDirection={"column"}>
          <Link 
          href="#"
          fontFamily={"Poppins"}
          mb={1}
          >
            Github
          </Link>
          { roundedBorder }
        </Flex>
    </Flex>
  )
}

export default Navbar;