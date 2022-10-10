import * as React from 'react';
import {  Wrap, Center, Spinner } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, State} from '../../contexts/ModelContextProvider';

const List = () => {
    const { models, isLoading } = React.useContext<State>(ModelContext);

    const loaderUIComp = (
        <Center h="300px">
            <Spinner size="xl" thickness='4px' color='blue.500'/>
        </Center>
    )

    const listComp = (
        <Wrap spacingY={4} spacingX={4}>
            { models.map((model) => <ListItem model={model} key={model.id} />)}
        </Wrap>
    )
    
    return isLoading ? loaderUIComp : listComp;
}

export default List;