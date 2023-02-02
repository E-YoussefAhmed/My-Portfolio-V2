import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  );
}
