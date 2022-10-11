import React from 'react';
import style from '../../styles/css/card_components/likes.module.css';

export const Likes = ({ likes }) => {

  return (
    <>
      <div className={style.likes}>
        <svg width={27} height={27} fill="#f7665e">
          <path d="M16.5 3A5.625 5.625 0 0 0 12 5.25 5.625 5.625 0 0 0 1.875 8.625c0 6.74 9.366 12.056 9.76 12.281A.73.73 0 0 0 12 21a.712.712 0 0 0 .366-.094 29.457 29.457 0 0 0 4.828-3.525c3.272-2.944 4.931-5.887 4.931-8.756A5.625 5.625 0 0 0 16.5 3Z" />
        </svg>
        <p>{likes}</p>
      </div>
    </>
  );
};

