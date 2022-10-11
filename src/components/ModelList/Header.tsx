import * as React from 'react';
import { Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { ModelContext } from '../../contexts/ModelContextProvider';

const Header = () => {
  const { lastUpdated } = React.useContext(ModelContext);

  return (
       <chakra.header mb={2} id="models">
            <Flex justifyContent={"space-between"} alignItems={"flex-end"}>
                <Heading size={["sm", "md"]}>List of Models</Heading>
                <chakra.div textAlign={"right"}>
                    <Text fontSize={["xs", "sm"]} fontWeight={600} fontFamily={"'Poppins', sans-serif"} color="gray.400">Last Updated</Text>
                    <Text fontSize={["sm", "md"]} fontWeight={600} fontFamily={"'Poppins', sans-serif"}>{lastUpdated}</Text>
                </chakra.div>
            </Flex>
        </chakra.header>     
  )
}

export default Header;