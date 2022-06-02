import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(100)
    })
  })

  return <><LoadingBar
  color="#f11946"
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
  waitingTime={10}
/><Navbar /><AnyComponent {...pageProps} /></>
}

export default MyApp
