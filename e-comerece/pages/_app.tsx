
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return<><Script src="https://unpkg.com/flowbite@latest/dist/flowbite.js" strategy='beforeInteractive'></Script> <AnyComponent {...pageProps} /> </>
}

export default MyApp
