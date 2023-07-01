import Header from '@/components/Header';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
