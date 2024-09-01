import { useState, useContext } from 'react';
import { Wrap, Center, Spinner, Box, Button, HStack } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, ModelState } from '../../contexts/ModelContextProvider';
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const LIMIT = 12
  const pageParam = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  console.log("page param: ", pageParam)

  const { total } = useContext<ModelState>(ModelContext);
  const possiblePages = Math.ceil(total / LIMIT)

  const setPageParam = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    setSearchParams(newParams)
  }

  const getPaginationBtnArr = () => {
    let buttonsArr = []
    let i = 0

    while (i < possiblePages) {
      buttonsArr.push(i + 1)
      i++
    }

    return buttonsArr
  }

  const handlePaginationClick = (page: number) => {
    setPageParam(page)
  }

  const PaginationButton = ({ page }: { page: number }) => {
    console.log("page param and number: ", pageParam, page)
    return (
      <Button
        onClick={() => handlePaginationClick(page)}
        isActive={pageParam === page}
        colorScheme="twitter"
        variant="solid"
        size="md"
        px={4}
      >{page}</Button>
    )
  }

  return (
    <HStack justifyContent="center">
      {getPaginationBtnArr().map((page: number) => <PaginationButton key={page} page={page} />)}
    </HStack>
  )
}
const List = () => {
  const { macbooks, isLoading } = useContext<ModelState>(ModelContext);

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
