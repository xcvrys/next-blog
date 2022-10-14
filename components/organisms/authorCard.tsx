import React from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { Back } from '../atoms/card_components/back';
import { Add } from '../atoms/card_components/add';
import styled from 'styled-components'


const Main = styled.div`
  margin: 2rem;
  max-width: 40rem;
  min-width: 20rem;
`;

const Author = styled.div`
  cursor: pointer;
  background-color: #fdf8f5;
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  img {
    border-radius: 50%;
  }
`;

const Details = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
`;

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 8px 0px;
`;

import { AuthorPictureSmall } from '../atoms/authorPicture';
export const AuthorCard = ({ author_name, author_slug, author_image, author_bio }) => {

  const router = useRouter();

  return (
    <>
      <Main>
        <Back />
        <Author onClick={() => router.push(`/author/${author_slug}`)}>
          <AuthorPictureSmall image={author_image} />
          <Details>
            <Name>{author_name}</Name>
            <BlockContent blocks={author_bio} />
          </Details>
        </Author>
        <Add />
      </Main>
    </>
  );
};
