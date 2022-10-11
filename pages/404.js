import style from '../styles/css/404.module.css';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <div className={style.main}>
        <h1>Ooops...</h1>
        <h2>Page Not Found</h2>
        <Link href={'https://next-blog-xcvrys.vercel.app/'}>
          <p>&lt; Home</p>
        </Link>
      </div>
    </>
  );
};

export default NotFound;