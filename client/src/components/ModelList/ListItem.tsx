import { WrapItem, Text, Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Model } from './List';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;

    return (
        <WrapItem minH={"70px"}>
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
            >
                <Box sx={{
                    flex: 1
                }}>
                    <Image alt={model.name} src={model.image} />
                </Box>
                <Text sx={{
                    flex: 4
                }}>
                    {model.name}
                </Text>
            </Link>
        </WrapItem>
    )
}

export default ListItem;