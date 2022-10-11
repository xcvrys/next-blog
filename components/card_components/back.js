import { useRouter } from 'next/router';
import style from '../../styles/css/card_components/back.module.css';
import Link from 'next/link';


export const Back = () => {

  const router = useRouter();


  return (
    <>
      <div className={style.main} >
        <div onClick={() => router.back()} >
          <p>&lt; back</p>
        </div>
        <div>
          <Link href="/">
            <p>&lt; Home</p>
          </Link>
        </div>
      </div>
    </>
  );
};
