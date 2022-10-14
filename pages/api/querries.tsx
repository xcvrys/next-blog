import { gql } from 'graphql-request';

export const postSlugQuerry = gql`
  {
  	allPost{
      slug{
        current
      }
    }
  }
`;

export const indexQuerry = gql`
  {
  	allPost{
      title,
      slug{
        current
      }
      mainImage{
        asset{
          url
        }
      }
      author{
        name,
        image{
          asset{
            url
          }
        }
      }
      categories{
        title
      }
    }
  }
`;

export const authorSlugQuerry = gql`
  {
    allAuthor {
      slug {
        current
      }
    }
  }
`; 