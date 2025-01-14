import { Html, Head, Main, NextScript } from 'next/document'
import { SpeedInsights } from "@vercel/speed-insights/next"
import clsx from "clsx";
import { fontSans } from 'config/fonts';



export default function Document() {
  return (
    <Html lang="es-ES">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  )
}
