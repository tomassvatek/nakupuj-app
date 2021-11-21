import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react"
import { CartProvider } from '../hooks/useCart'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function defaultLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || defaultLayout
  return (
    <ChakraProvider>
      <CartProvider>
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </ChakraProvider>
  );
}

export default App
