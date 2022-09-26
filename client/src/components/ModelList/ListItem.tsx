import { WrapItem, Text, Box, Image, Link } from '@chakra-ui/react';
import { Model } from './List';
import useLinkNavigation from '../hooks/useLinkNavigate';

interface Props {
    model: Model
}

const ListItem = (props: Props) => {
    const { model } = props;
    const navigate = useLinkNavigation(`/details/model-${model.id}`);
    const handleLinkClick = () => {
        navigate && navigate();
    }
    
    return (
        <WrapItem>
            <Link onClick={handleLinkClick}>
                <Box><Image alt={model.name} src={model.image} /></Box>
                <Text>{model.name}</Text>
            </Link>
        </WrapItem>
    )
}

export default ListItem;