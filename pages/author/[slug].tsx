import BlockContent from '@sanity/block-content-to-react';
import { Back } from '../../components/atoms/card_components/back';
import styled from 'styled-components'


const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  height: auto;
  margin: 0 2rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #222;
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
  background-color: #fdf8f5;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80ch;
  
  img {
    border-radius: 50%;
    width: 300px;
  }
`;
const PostsList = styled.div`
  background-color: #fdf8f5;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;

  p {
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Posts = styled.div`
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;

  p {
    font-size: 1rem;
    font-weight: normal;
  }

  &:hover {
    background-color: #e8cebf;
  }
`;


export const Post = ({ name, image, bioRaw }) => {

  return (
    <>
      <Main>
        <Content>
          <Author>
            {image && <img src={image} alt="Author Image" />}
            <h1>{name}</h1>
            <BlockContent blocks={bioRaw} />
          </Author>
          <div>
            <Back />
            <PostsList>
              <p>{name} posts:</p>
              <Posts>
                PLACEHOLDER
              </Posts>
            </PostsList>
          </div>
        </Content>
      </Main>
    </>
  );
}

export default Post;




import { request } from 'graphql-request';
import { gql } from 'graphql-request';

export const getStaticPaths = async () => { //LINK
  const query = gql`
    {
      allAuthor {
        slug {
          current
        }
      }
    }`;

  const { allAuthor } = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', query);
  const paths = allAuthor.map((author) => ({
    params: { slug: author.slug.current },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => { //AUTHOR CONTENT
  const query = gql`
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

  const { allAuthor } = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', query);
  const author = allAuthor[0];

  return {
    props: {
      name: author.name,
      image: author.image.asset.url,
      bioRaw: author.bioRaw,
    },
  };
}
