import { WrapItem, Text, Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Model } from './List';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;

    return (
        <WrapItem>
            <Link as={RouterLink} to={`/details/model-${model.id}`}>
                <Box><Image alt={model.name} src={model.image} /></Box>
                <Text>{model.name}</Text>
            </Link>
        </WrapItem>
    )
}

export default ListItem;