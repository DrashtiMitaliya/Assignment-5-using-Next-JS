import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '@/Redux/Store/Store';
import  '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <Toaster />
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider >
    </>
  )


}
