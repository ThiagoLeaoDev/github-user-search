import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#F4A27E',
    secondary: '#D0DFE3',
    text: '#1F282C',
    base: '#FFFFFF',
    baseSecondary: '#ebedf3',
    baseTertiary: '#DADFE2',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
