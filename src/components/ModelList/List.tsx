import { useContext } from 'react';
import { Wrap, Center, Spinner, Box, Button, HStack, Text } from '@chakra-ui/react';
import ListItem from './ListItem';
import { ModelContext, ModelState } from '../../contexts/ModelContextProvider';
import { useSearchParams } from 'react-router-dom';

const LIMIT = 12;

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const { total } = useContext<ModelState>(ModelContext);
  const possiblePages = Math.ceil(total / LIMIT);

  const setPageParam = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(newPage));
    setSearchParams(newParams);
  };

  const handlePaginationClick = (page: number) => {
    if (page < 1 || page > possiblePages) return;
    setPageParam(page);
  };

  const getPaginationNumbers = () => {
    const delta = 2; // how many pages to show around the current page
    const range: (number | string)[] = [];
    const left = Math.max(2, pageParam - delta);
    const right = Math.min(possiblePages - 1, pageParam + delta);

    range.push(1);

    if (left > 2) {
      range.push('...');
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < possiblePages - 1) {
      range.push('...');
    }

    if (possiblePages > 1) {
      range.push(possiblePages);
    }

    return range;
  };

  return (
    <HStack justifyContent="center" spacing={2} mt={6}>
      {/* Prev Button */}
      <Button
        size="sm"
        onClick={() => handlePaginationClick(pageParam - 1)}
        isDisabled={pageParam === 1}
      >
        Prev
      </Button>

      {/* Page Numbers */}
      {getPaginationNumbers().map((page, idx) =>
        page === '...' ? (
          <Text key={idx} px={2} fontWeight="bold">
            ...
          </Text>
        ) : (
          <Button
            key={page}
            size="sm"
            onClick={() => handlePaginationClick(page as number)}
            variant={pageParam === page ? 'solid' : 'outline'}
            colorScheme={pageParam === page ? 'blue' : undefined}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <Button
        size="sm"
        onClick={() => handlePaginationClick(pageParam + 1)}
        isDisabled={pageParam === possiblePages}
      >
        Next
      </Button>
    </HStack>
  );
};

const List = () => {
  const { macbooks, isLoading } = useContext<ModelState>(ModelContext);

  const loaderUIComp = (
    <Center h="533px">
      <Spinner size="xl" thickness="4px" color="blue.500" />
    </Center>
  );

  const listComp = (
    <Box>
      <Wrap spacingY={4} spacingX={4} mb={6}>
        {macbooks.map((model) => (
          <ListItem model={model} key={model._id} />
        ))}
      </Wrap>
      <Pagination />
    </Box>
  );

  return isLoading ? loaderUIComp : listComp;
};

export default List;
