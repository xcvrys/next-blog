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





