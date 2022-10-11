import imageUrlBuilder from '@sanity/image-url';
import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styles/css/AuthorCard.module.css';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { Back } from './card_components/back';
import { Add } from './card_components/add';
import { Comments } from './card_components/comments';


export const AuthorCard = ({ author_name, author_slug, author_image, author_bio }) => {

  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: '8vy6b3r4',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(author_image).width(75).height(75));
  }, [author_image]);


  return (
    <>
      <div className={style.main}>
        <Back />
        <div className={style.author} onClick={() => router.push(`/author/${author_slug.current}`)}>
          <div className={style.image}>
            {imageUrl && <img src={imageUrl} />}
          </div>
          <div className={style.details}>
            <div className={style.name}>{author_name}</div>
            <BlockContent blocks={author_bio} />
          </div>
        </div>
        <Add />
        {/* <Comments /> */}
      </div>
    </>
  );
};