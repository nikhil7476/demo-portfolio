import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/site-icon-preview.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MakersOfCode" />
        <meta name="publisher" content="MakersOfCode" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
