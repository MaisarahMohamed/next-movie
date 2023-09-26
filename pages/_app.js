import Layout from './components/layouts';
import '../styles/globals.css';
import '../styles/navbar-style.css';
import '../styles/hero-style.css';
import '../styles/content-style.css';
import '../styles/footer-style.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );

}

export default MyApp
