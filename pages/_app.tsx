import 'WNTR/styles/globals.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import * as gtag from "../utils/gtag"

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events])

  return <Component {...pageProps} />
}