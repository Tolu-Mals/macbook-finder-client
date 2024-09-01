import { Heading, Container, Text, Textarea, Button } from '@chakra-ui/react';

const Reviews = () => {
  return (
    <Container maxW="1200px" py={12}>
      <Heading size="md" mb={2} color="white">😊 Leave a Review</Heading>
      <Text sx={{
        fontSize: ["sm", "md"],
        fontFamily: '"Poppins", sans-serif',
        color: 'white',
        fontWeight: 200,
        marginBottom: 4,
      }}>Feel free to let me know what you think about Macbook finder</Text>

      <form action="https://formsubmit.co/malomo.tolz@gmail.com" method='POST'>
        <Textarea maxWidth="500px" borderColor="gray.400" backgroundColor="gray.600" py="15px" _hover={{ borderColor: 'gray.400' }} _placeholder={{ color: 'gray.300' }} color="white" placeholder="Type your thoughts here" mb={4} name="Review" />
        <br />
        <Button type="submit"
          colorScheme="twitter"
          fontFamily={"heading"}
          size="lg"
          px={8}
          fontSize={["0.9rem", "1rem",]}

        >Send Review</Button>
      </form>

    </Container>
  )
}

export default Reviews
