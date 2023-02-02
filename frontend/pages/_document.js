import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-[#111] bg-gray-200 transition-all duration-300 w-screen h-screen overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
