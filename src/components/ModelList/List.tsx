import * as React from 'react';
import { Wrap, Center, Spinner, Box, Button, HStack } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, ModelState } from '../../contexts/ModelContextProvider';
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const LIMIT = 12
  const page = searchParams.get('page') ?? 1

  const { total } = React.useContext<ModelState>(ModelContext);
  const possiblePages = Math.ceil(total / LIMIT)
  const hasNextPage = page < possiblePages
  const hasPreviousPage = page > 1

  const onPrevPageClick = () => {
    if (hasPreviousPage) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('page', String(Number(page) - 1))
      setSearchParams(newParams)
    }
  }

  const onNextPageClick = () => {
    if (hasNextPage) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('page', String(Number(page) + 1))
      setSearchParams(newParams)
    }
  }

  return (
    <HStack justifyContent="center">
      <Button
        disabled={!hasPreviousPage}
        onClick={onPrevPageClick}
        colorScheme="twitter"
        size="lg"
        px={4}
      >Previous</Button>
      <Button
        disabled={!hasNextPage}
        onClick={onNextPageClick}
        colorScheme="twitter"
        size="lg"
        px={4}
      >Next</Button>
    </HStack>
  )
}
const List = () => {
  const { macbooks, isLoading } = React.useContext<ModelState>(ModelContext);

  const loaderUIComp = (
    <Center h="533px">
      <Spinner size="xl" thickness='4px' color='blue.500' />
    </Center>
  )

  const listComp = (
    <Box>
      <Wrap spacingY={4} spacingX={4} mb={6}>
        {macbooks.map((model) => <ListItem model={model} key={model._id} />)}
      </Wrap>
      <Pagination />
    </Box>
  )

  return isLoading ? loaderUIComp : listComp;
}

export default List;
