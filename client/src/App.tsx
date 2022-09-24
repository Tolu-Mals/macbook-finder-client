import * as React from "react";
import {
  ChakraProvider,
  theme,
  Container
} from "@chakra-ui/react";
import Header from "./components/Header/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <Header />
    </Container>
  </ChakraProvider>
)
