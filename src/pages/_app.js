import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { wrapper } from '../redux'
import theme from '../theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystsemColorMode: true
        }}
      >
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)