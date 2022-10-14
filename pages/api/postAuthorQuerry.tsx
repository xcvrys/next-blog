import { gql } from 'graphql-request';

export const postAuthorQuerry = gql`
  query getAuthor($slug: String!) {
    allAuthor(where: { slug: { current: { eq: $slug } } }) {
      name
      bio
      image {
        asset {
          url
        }
      }
      posts {
        title
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
        }
        categories {
          title
        }
      }
    }
  }
`;



//   query getAuthor($slug: String!) {
//   allAuthor(where: { slug: { current: { eq: $slug } } }) {
//     name
//     bioRaw
//       image {
//         asset {
//         url
//       }
//     }
//   }
// }
// {
//   "slug": "xcvrys"
// }





// import request from 'graphql-request';
// import { graphql } from './gql/gql';

// const getMovieQueryDocument = graphql(/* GraphQL */ `
//   query getMovie($title: String!) {
//     Movie(title: $title) {
//       releaseDate
//       actors {
//         name
//       }
//     }
//   }
// `);


// const data = await request(
//   'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
//   getMovieQueryDocument,
//   // variables are type-checked!
//   { title: "Inception" }
// )

// // `data.Movie` is typed!