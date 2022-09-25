import { WrapItem, Text, Box, Image, Link } from '@chakra-ui/react';
import { Model } from './List';
import { useNavigate } from 'react-router-dom';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;
    const navigate = useNavigate();
    
    const navigateToPage = (id: string) => {
        navigate(`/details/model-${id}`);
    }
    return (
        <WrapItem>
            <Link onClick={() => navigateToPage(model.id)}>
                <Box><Image alt={model.name} src={model.image} /></Box>
                <Text>{model.name}</Text>
            </Link>
        </WrapItem>
    )
}

export default ListItem;