import { MainLayout } from "../components/Files";
import '../styles/globals.css'
export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
