import { Container, Center, Heading, Box, Image, chakra, Text, VStack, Skeleton } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

interface Props {
  imageUrl?: string;
  name?: string;
  isLoading: boolean
}

const index = (props: Props) => {
  const { imageUrl, name, isLoading } = props;

  const productImageComp = (
    <Box mb={4} flex={[1, 1, 0.5]}>
      <Box sx={{
        h: '200px',
        w: '288px',
        overflow: 'hidden',
        'img': {
          marginTop: '-40px'
        }
      }}>
        <Image src={imageUrl} />
      </Box>
    </Box>
  );

  const ImageSkeleton = () => {
    return (
      <div>
        <Skeleton w="288px" h="200px" startColor="gray.200" endColor="gray.300" mb={4} />
      </div>
    )
  }

  const TitleSkeleton = () => {
    return (
      <div>
        <Skeleton w="200px" h="20px" startColor="gray.200" endColor="gray.300" mb={4} />
        <Skeleton w="800px" h="40px" startColor="gray.200" endColor="gray.300" mb={4} />
      </div>
    )
  }

  return (
    <chakra.header py={4} bg={"white"}>
      <Container maxW="1200px">
        <Navbar />
        <Center flexDirection={['column', 'column', 'row']} pt={[4, 4, 8]} pb={4} gap={[0, 0, 14]}>
          {isLoading && !name && <ImageSkeleton />}
          {imageUrl && productImageComp}
          <VStack alignItems={"flex-start"} flex={[1, 1, 1]}>
            {name && <Text sx={{
              fontWeight: 500,
              color: "gray.400",
              visibility: ["hidden", "hidden", "visible"],
              fontFamily: "'Poppins', sans-serif"
            }}>Product Model</Text>}
            {isLoading && !name && <TitleSkeleton />}
            {name && <Heading
              as="h1"
              size={["md", "md", "md", "lg"]}
              sx={{
                textAlign: ['center', 'left', 'left'],
                fontWeight: 700,
                color: 'gray.800'
              }}
            >{name}</Heading>}
          </VStack>
        </Center>
      </Container>
    </chakra.header>
  )
}

export default index
