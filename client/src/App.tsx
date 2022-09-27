import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Home from './pages/Home';
import Details from './pages/Details';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/inter';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#92D2FD',
      200: '#A6D9FC',
      300: '#56BAFE',
      400: '#4693C7',
      500: '#2687C9',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    base: `'Inter', sans-serif`
  }
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/model-:id" element={<Details />} />
    </Routes>
  </ChakraProvider>
)
