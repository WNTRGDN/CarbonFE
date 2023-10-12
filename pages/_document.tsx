import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <Html lang="en">
      <Head />
      <body>
        { isProduction ?
          <>
            <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-5RTJX54Y3E" />
            <Script id="g-tag" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5RTJX54Y3E', { page_path: window.location.pathname });` }} />
          </>
        : null }
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}