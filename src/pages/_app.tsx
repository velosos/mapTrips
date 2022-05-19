import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerpreate</title>
        <meta
          name="description"
          content="NextJs and Styled Component project"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
