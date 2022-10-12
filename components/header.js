import React from 'react';
import style from '../styles/css/Header.module.css';
import Link from 'next/link';

export const Header = () => {

  return (
    <>
      <div className={style.header}>
        <p>xcvrys Blog</p>
        <Link href='#section'>
          <p>posts </p>
        </Link>
      </div>
    </>
  );
};

