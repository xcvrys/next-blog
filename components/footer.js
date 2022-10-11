import styles from '../styles/css/Footer.module.css';
import Link from 'next/link';

export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();


  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <Link href={'https://twitter.com/xcvrys'}>
            <a target="_blank">Twitter</a>
          </Link>

          <Link href={'https://github.com/xcvrys'}>
            <a target="_blank">Github</a>
          </Link>

          <Link href={'https://www.linkedin.com/in/kamil-r-486147253/'}>
            <a target="_blank">LinkedIn</a>
          </Link>

          <Link href={'https://www.instagram.com/xcvrys_/'}>
            <a target="_blank">Instagram</a>
          </Link>
        </div>
        <div className={styles.copyright}>
          <p>© {year} Xcvrys</p>
        </div>
      </div>
    </>
  );
};
