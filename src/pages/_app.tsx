import Header from '@/components/Header';
import TopicModal from '@/components/TopicModal';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TopicModalProvider } from '@/contexts/TopicModalContext';
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import Login from './login';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const showHeader = Component !== Login;
  return (
    <ThemeProvider>
      <TopicModalProvider>
        {showHeader && <Header />} {/* Renderiza o Header apenas se showHeader for verdadeiro */}
        <Component {...pageProps} />
      </TopicModalProvider>
    </ThemeProvider>
  )
}
