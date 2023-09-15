import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const source = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`

const Document = () => {
  return (
    <Html>
      <Head>
        <Script type="text/javascript" src={source} strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
