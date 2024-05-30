import { AppProps } from 'next/app';
import './styles.css';
import Layout  from '../components/Layout';
import { DiarGraphqlProvider} from '@diar/apollo'
import { wrapper } from '@diar/state'

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <DiarGraphqlProvider >
      <Layout>
      <main className="app">
        <Component {...pageProps} />
      </main>
      </Layout>
    </DiarGraphqlProvider >
  );
}

export default wrapper.withRedux(CustomApp);
