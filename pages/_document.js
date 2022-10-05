import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    // <meta charset="utf-8" />
    // <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    // <meta name="viewport" content="width=device-width, initial-scale=1" />
    // <meta name="theme-color" content="#000000" />
    // <meta name="description" content="Dirt-Less Detailing Official Site" />
    // <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    // <title>Dirt-Less Detailing</title>

    // <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
