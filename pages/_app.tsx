import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/components/Global'
import { ThemeContextProvider } from '@/context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
