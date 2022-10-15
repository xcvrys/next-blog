import BlockContent from '@sanity/block-content-to-react';
import { AuthorCard } from '../../components/organisms/authorCard';
import { Likes } from '../../components/atoms/card_components/likes';
import { postSlugQuerry } from '../api/querries';
import { request, gql } from 'graphql-request';
import styled from 'styled-components'


const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Plus Jakarta Sans";
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const Blog = styled.div`
  margin: 2rem;
  width: 50rem;
  background-color: ${({ theme }) => theme.colors.blogAuthor};
  padding: 2.5rem;
  border-radius: 20px;
  `;

const MainImage = styled.img`
  width: 100%;
  border-radius: 0.75rem;
`;

const Footer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  
  p{
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Post = ({ title, body, image, date, likes, author_name, author_slug, author_image, author_bio }) => {

  const dateReadable = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Main>
        <Blog>
          <h1>{title}</h1>
          {image && <MainImage src={image} alt="Post Image" />}
          <BlockContent blocks={body} />
          <Footer>
            {dateReadable && <p>{dateReadable}</p>}
            <Likes likes={likes} />
          </Footer>
        </Blog>
        <AuthorCard author_name={author_name} author_slug={author_slug} author_image={author_image} author_bio={author_bio} />
      </Main>
    </>
  );
};

export default Post;

///////////////////////////////////////////////
export async function getStaticPaths() {
  const post = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', postSlugQuerry)
  const paths = post.allPost.map((post: { slug: { current: string; }; }) => ({
    params: { slug: post.slug.current },
  }));
  return { paths, fallback: true };
}
///////////////////////////////////////////////

export async function getStaticProps({ params }) {

  const q = gql`
    query {
      allPost(where: {slug: {current: {eq: "${params.slug}"}}}) {
        title,
        mainImage {
          asset {
            url
          }
        },
        bodyRaw,
        publishedAt,
        likes,
        author {
          image {
            asset {
              url
            }
          },
          name,
          bioRaw,
          slug {
            current
          }
        }
      }
    }
    `;
  const post = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', q)
  const data = post.allPost[0];

  return {
    props: {
      body: data.bodyRaw,
      title: data.title,
      image: data.mainImage.asset.url,
      date: data.publishedAt,
      likes: data.likes,
      author_name: data.author.name,
      author_bio: data.author.bioRaw,
      author_image: data.author.image.asset.url,
      author_slug: data.author.slug.current,
    },
    revalidate: 1000,
  }
}