import 'WNTR/styles/globals.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NODE_ENV === "production") {
        window.gtag('config', 'G-5RTJX54Y3E', { page_path: url })
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events])

  return <Component {...pageProps} />
}