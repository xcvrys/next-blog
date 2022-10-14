import React from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { Back } from '../atoms/card_components/back';
import { Add } from '../atoms/card_components/add';
import styled from 'styled-components'


const Main = styled.div`
  margin: 2rem;
  max-width: 30rem;
  min-width: 20rem;
`;

const Author = styled.div`
  cursor: pointer;
  background-color: #fdf8f5;
  max-width: 100vw;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin-top: 2rem;
  color: #222;
  align-items: flex-start;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const Image = styled.div`
  margin-top: 20px;
  border-radius: 50%;
  width: auto;
  height: 100%;
  object-fit: cover;

  img {
    border-radius: 50%;
    width: 75px;
  }
`;

const Details = styled.div`
  display: flex;
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

export const AuthorCard = ({ author_name, author_slug, author_image, author_bio }) => {

  const router = useRouter();

  return (
    <>
      <Main>
        <Back />
        <Author onClick={() => router.push(`/author/${author_slug.current}`)}>
          <Image>
            {author_image && <img src={author_image} alt="Author Image" />}
          </Image>
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
