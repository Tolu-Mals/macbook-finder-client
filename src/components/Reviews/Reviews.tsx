import { Heading, Container, Text, Textarea, Button, chakra } from '@chakra-ui/react';

const Reviews = () => {
  return (
    <Container maxW="1200px" py={12}>
      <Heading size="md" mb={2}>😊 Leave a Review</Heading>
      <Text sx={{
        fontSize: ["sm", "md"],
        color: "gray.300",
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 200,
        marginBottom: 4,
      }}>Feel free to let me know what you think about Macbook finder</Text>

      <form action="https://formsubmit.co/malomo.tolz@gmail.com" method='POST'>
        <Textarea _placeholder={{
          color: 'gray.400'
        }} sx={{
          borderColor: 'gray.600'
        }} placeholder="Type your thoughts here" mb={4} name="Review" />
        <Button type="submit" colorScheme="blue">Send Review</Button>
      </form>

    </Container>
  )
}

export default Reviews
