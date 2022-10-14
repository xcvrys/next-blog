import '../styles/globals.css'
import { Footer } from '../components/molecules/footer';
import { Header } from '../components/molecules/header';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return ( //if path != /404, render header and footer
    <>
      {router.pathname !== "/404" && <Header />}
      <Component {...pageProps} />
      {router.pathname !== "/404" && <Footer />}
    </>
  )
}

export default MyApp

