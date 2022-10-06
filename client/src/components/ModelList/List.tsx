import * as React from 'react';
import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, Model } from '../../contexts/ModelContextProvider';

const List = () => {
    const models = React.useContext<Model[]>(ModelContext);
    return (
        <Wrap spacingY={4} spacingX={4}>
            { models.map((model) => <ListItem model={model} key={model.id} />)}
        </Wrap>
    )
}

export default List;