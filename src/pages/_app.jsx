import '@/src/styles/scss/Normalizes.scss';
import '@/src/styles/scss/globals.scss';
import Layout from '@/src/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
