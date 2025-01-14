import "/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { NextUIProvider } from "@nextui-org/react";
import { SEOpt } from "../../next-seo.config";


export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <DefaultSeo {...SEOpt} />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </main>
  );
}
