import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-gray-900'>
        <GoogleTagManager gtmId="GTM-5BW658ZD" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
