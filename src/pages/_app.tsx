import Header from '@/components/Header';
import TopicModal from '@/components/TopicModal';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TopicModalContext, TopicModalProvider } from '@/contexts/TopicModalContext';
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { useContext } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TopicModalProvider>
        <Header />
        <Component {...pageProps} />
      </TopicModalProvider>
    </ThemeProvider>
  )
}
