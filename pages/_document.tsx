import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;1,700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-120x120-52b1adb4fe3a8f825fc4b143de12ea4b.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-152x152-7b7c6444b63d8b6ebad9dae7169e5ed6.png"
          />
          <link
            rel="shortcut icon"
            sizes="76x76"
            type="image/x-icon"
            href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
          />
          <link
            rel="icon"
            sizes="192x192"
            href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
