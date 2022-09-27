import { Flex, Heading, Text, chakra } from '@chakra-ui/react';

const Header = () => {
  return (
       <chakra.header mb={2}>
            <Flex justifyContent={"space-between"} alignItems={"flex-end"}>
                <Heading size={["sm", "md"]}>List of Models</Heading>
                <chakra.div textAlign={"right"}>
                    <Text fontSize={["xs", "sm"]} fontWeight={600} fontFamily={"'Poppins', sans-serif"} color="gray.400">Last Updated</Text>
                    <Text fontSize={["sm", "md"]} fontWeight={600} fontFamily={"'Poppins', sans-serif"}>6th September, 2022</Text>
                </chakra.div>
            </Flex>
        </chakra.header>     
  )
}

export default Header;