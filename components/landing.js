import React from 'react';
import styles from '../styles/css/Landing.module.css';
import Link from 'next/link';


export const Landing = () => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <p>Hi, I'm
            <span>
              <Link href={'https://youtu.be/d1YBv2mWll0'}>
                <a target="_blank">XCVRYS</a>
              </Link>
            </span>
          </p>
          <p>Welcome to some random blog</p>
        </div>
      </div>
    </>
  );
};
