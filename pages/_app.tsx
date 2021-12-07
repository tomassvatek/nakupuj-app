import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect } from 'react'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react"
import { CartProvider } from '../hooks/useCart'
import nakupujTheme from '../theme';
// @ts-ignore
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import '../public/progress.css'

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
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ChakraProvider theme={nakupujTheme}>
      <CartProvider>
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </ChakraProvider>
  );
}

export default App
