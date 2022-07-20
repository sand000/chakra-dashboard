import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import theme  from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>

       <AllRoutes/>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
