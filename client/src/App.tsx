import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import Home from './pages/Home';



export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ChakraProvider>
)
