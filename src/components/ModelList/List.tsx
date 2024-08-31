import * as React from 'react';
import { Wrap, Center, Spinner } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, ModelState } from '../../contexts/ModelContextProvider';

const List = () => {
  const { macbooks, isLoading } = React.useContext<ModelState>(ModelContext);

  const loaderUIComp = (
    <Center h="300px">
      <Spinner size="xl" thickness='4px' color='blue.500' />
    </Center>
  )

  const listComp = (
    <Wrap spacingY={4} spacingX={4}>
      {macbooks.map((model) => <ListItem model={model} key={model._id} />)}
    </Wrap>
  )

  return isLoading ? loaderUIComp : listComp;
}

export default List;
