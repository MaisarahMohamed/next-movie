import Layout from './components/layouts';
import '../styles/globals.css';
import '../styles/navbar-style.css';
import '../styles/hero-style.css';
import '../styles/footer-style.css';
import '../styles/movie-list-style.css';
import '../styles/search-style.css';

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
