import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  padding: 4rem 0;
`;

const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const Post = styled.div`
  margin: 1rem;
  cursor: pointer;
  background-color: #fdf8f5;
  border-radius: 0.75rem;
  position: relative;
`;
const Category = styled.div`
  position: absolute;
  width: 100%;
  top: 245px;
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: #266150AB;
    padding: 0.5rem 0.6rem;
    border-radius: 0.4rem;
    text-transform: uppercase;
    margin: 10px 5px;
    color: #fdf8f5;
  }
`;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Details = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    border-radius: 50%;
    margin-left: 10px;
    width: 50px;
  }
`;

const Author = styled.div`
  margin: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 14ch;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 0.75rem;
  }
`;

export default function PostsList({ posts }) {
  const router = useRouter();

  return (
    <>
      <Main>
        <Feed id='section'>
          {posts.length ? posts.map((p: { slug: { current: string; }; categories: string[]; mainImage: { asset: { url: string } }; title: string; author: { image: { asset: { url: string } }; name: string }; }, index: React.Key) => (
            <Post onClick={() => router.push(`/post/${p.slug.current}`)} key={index}>
              <Category>
                {p.categories ? p.categories.map((c: any, index: number) => (
                  <span key={index}>#{c.title}</span>
                )) : null}
              </Category>
              <MainImage src={p.mainImage.asset.url} alt="Post Image" />
              <Details>
                <img src={p.author.image.asset.url} alt="Author Image" />
                <Author>
                  <h3>{p.title}</h3>
                  <p>{p.author.name}</p>
                </Author>
              </Details>
            </Post>
          )) : <>No Posts Yet</>}
        </Feed>
      </Main>
    </>
  );
}