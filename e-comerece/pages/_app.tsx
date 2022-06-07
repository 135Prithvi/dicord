import '../styles/globals.css'
import '../styles/Home.module.css'
import { DiscordProvider } from '../context/context'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  return (
    <>
      <DiscordProvider>
        <Script
          src="https://unpkg.com/flowbite@latest/dist/flowbite.js"
          strategy="beforeInteractive"
        ></Script>{' '}
        <AnyComponent {...pageProps} />
      </DiscordProvider>{' '}
    </>
  )
}

export default MyApp
