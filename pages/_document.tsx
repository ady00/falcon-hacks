import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Space+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Falconhacks" />
        <meta
          name="description"
          content="FalconHacks is a 24-hour event between 12/10 and 12/11, where students will be able to design and create their own projects. We will be providing workshops, mentors, and prizes during the event"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://falconhacks.tech" />
        <meta property="og:title" content="Falconhacks by Foothil CS Club" />
        <meta
          property="og:description"
          content="FalconHacks is a 24-hour event between 12/10 and 12/11, where students will be able to design and create their own projects. We will be providing workshops, mentors, and prizes during the event"
        />
        <meta
          property="og:image"
          content="https://falconhacks.tech/IMG_0064.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://falconhacks.tech/" />
        <meta
          property="twitter:title"
          content="Falconhacks by Foothill HS CS Club"
        />
        <meta
          property="twitter:description"
          content="FalconHacks is a 24-hour event between 12/10 and 12/11, where students will be able to design and create their own projects. We will be providing workshops, mentors, and prizes during the event"
        />
        <meta
          property="twitter:image"
          content="https://falconhacks.tech/IMG_0064.png"
        ></meta>
        <link rel="shortcut icon" type="image/png" href="/IMG_0064.png" />
        <style>{`
          body.hid {
            overflow:hidden;
            overflow-y:hidden;
            position: fixed;

          }
          `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
