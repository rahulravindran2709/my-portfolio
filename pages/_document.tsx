import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document<{ emotionStyleTags: any }> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body className="h-screen w-screen dark:bg-stone-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
