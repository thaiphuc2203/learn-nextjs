import '@/styles/global.css';
import { EmptyLayout } from '../layouts';
import type { AppProps } from 'next/app';
import { AppPropsWithLayout } from 'models';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('re render app');
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
