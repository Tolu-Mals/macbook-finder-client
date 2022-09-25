import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import Home from './pages/Home';
import Details from './pages/Details';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/model-:id" element={<Details />} />
    </Routes>
  </ChakraProvider>
)
