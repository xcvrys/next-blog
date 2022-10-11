import { useRouter } from 'next/router';
import React from 'react';
import style from '../../styles/css/card_components/back.module.css';


export const Back = () => {

  const router = useRouter();


  return (
    <>
      <div className={style.main} >
        <div onClick={() => router.back()} >
          <p>&lt; back</p>
        </div>
        <div onClick={() => router.push('/')} >
          <p>&lt; home</p>
        </div>
      </div>
    </>
  );
};
