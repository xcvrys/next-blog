import '../styles/css/globals.css'
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/404" && <Header />}
      <Component {...pageProps} />
      {router.pathname !== "/404" && <Footer />}
    </>
  )
}

export default MyApp
