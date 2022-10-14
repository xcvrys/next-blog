import { gql } from 'graphql-request';

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
  }`;