import { Landing } from '../components/molecules/landing';
import { Blocks } from '../components/molecules/blocks';
import { Quotes } from '../components/molecules/quotes';
import PostsList from '../components/organisms/postsList';
import React from 'react';
import { indexQuerry } from './api/querries';

export default function Home({ posts }) {

  return (
    <>
      <Landing />
      <Blocks />
      <Quotes />
      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {

  const post = await request('https://8vy6b3r4.api.sanity.io/v1/graphql/production/default', indexQuerry)
    .then(data => {
      return data.allPost;
    })
    .catch(err => {
      console.log(err);
    });

  return {
    props: {
      posts: post,
      unstable_revaloidate: 1000,
    },
  };
}

import { request } from 'graphql-request';
