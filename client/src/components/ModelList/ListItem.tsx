import { WrapItem, Text, Box, Image } from '@chakra-ui/react';
import { Model } from './List';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;

    return (
        <WrapItem>
            <Box><Image alt={model.name} src={model.image} /></Box>
            <Text>{model.name}</Text>
        </WrapItem>
    )
}

export default ListItem;