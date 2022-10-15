import BlockContent from '@sanity/block-content-to-react';
import { Back } from '../../components/atoms/card_components/back';
import { AuthorPictureBig } from '../../components/atoms/authorPicture';
import { authorSlugQuerry } from '../api/querries';
import { request, gql } from 'graphql-request';
import { Key } from 'react';
import styled from 'styled-components'
import Link from 'next/link';

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  height: auto;
  margin: 0 2rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Author = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blogAuthor};
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80ch;
  
  img {
    border-radius: 50%;
  }
`;
const PostsList = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;

  p {
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const SinglePost = styled.div`
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;

  p {
    font-size: 1rem;
    font-weight: normal;
  }

  &:hover {
  background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Post = ({ name, image, bioRaw, posts }) => {

  return (
    <>
      <Main>
        <Content>
          <Author>
            <AuthorPictureBig image={image} />
            <h1>{name}</h1>
            <BlockContent blocks={bioRaw} />
          </Author>
          <div>
            <Back />
            <PostsList>
              <p>{name} posts:</p>
              {posts.length ? posts.map((post: { slug: Key; title: string }) => (
                <SinglePost key={post.slug}>
                  <Link href={`/post/${post.slug}`}>
                    <p>{post.title}</p>
                  </Link>
                </SinglePost>
              )) : <p>There are no posts yet</p>}
            </PostsList>
          </div>
        </Content>
      </Main>
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  ////////////////////     GET LINK     ////////////////////
  const query = authorSlugQuerry
  const { allAuthor } = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', query);

  const paths = allAuthor.map((author: { slug: { current: string; }; }) => ({
    params: { slug: author.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  ////////////////////     GET AUTHOR     ////////////////////
  const authorQuery = gql`
    {
      allAuthor(where: { slug: { current: { eq: "${params.slug}" } } }) {
        name
        slug {
          current
        }
        bioRaw
        image {
          asset {
            url
          }
        }
      }
    }`;

  const { allAuthor } = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', authorQuery);
  const author = allAuthor[0];


  ////////////////////     GET POSTS     ////////////////////
  const postsQuery = gql`
    {
      allPost(where: { author: { slug: { current: { eq: "${params.slug}" } } } }) {
        title
        slug {
          current
        }
      }
   }`;

  const { allPost } = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', postsQuery);
  const posts = allPost.map((post: { title: string; slug: { current: string; }; }) => ({
    title: post.title,
    slug: post.slug.current,
  }));

  return {
    props: {
      name: author.name,
      image: author.image.asset.url,
      bioRaw: author.bioRaw,
      posts,
    },
  };
}
