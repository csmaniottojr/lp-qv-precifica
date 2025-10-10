import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang='en'>
      <GoogleTagManager gtmId="GTM-5BW658ZD" />
      <Head />
      <body className='bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
