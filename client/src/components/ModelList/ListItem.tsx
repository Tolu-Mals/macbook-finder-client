import { WrapItem, Text, Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Model } from './List';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;

    return (
        <WrapItem minH={"70px"} w={["100%", "100%", "100%", "375px"]}>
            <Link
            as={RouterLink} 
            to={`/details/model-${model.id}`}
            _hover={{
                border: "none"
            }}
            bg={"white"}
            display={"flex"}
            gap={"1rem"}
            p={"1rem"}
            alignItems={"center"}
            borderRadius={8}
            w="100%"
            >
                <Box sx={{
                    flex: 1
                }}>
                    <Image alt={model.name} src={model.image} />
                </Box>
                <Text 
                sx={{
                    flex: 4,
                    fontSize: ["sm","md"],
                    fontFamily: '"Poppins", sans-serif',
                }}
                >
                    {model.name}
                </Text>
            </Link>
        </WrapItem>
    )
}

export default ListItem;