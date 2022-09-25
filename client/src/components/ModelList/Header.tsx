import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
       <header>
            <Flex justifyContent={"space-between"}>
                <Heading>List of Models</Heading>
                <div>
                    <Text>Last Updated</Text>
                    <Text>6th September, 2022</Text>
                </div>
            </Flex>
        </header>     
  )
}

export default Header;