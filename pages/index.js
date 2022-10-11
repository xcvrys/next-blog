import styles from '../styles/css/Home.module.css'
import { Landing } from '../components/landing';
import { Blocks } from '../components/blocks';
import { Footer } from '../components/footer';
import { Quotes } from '../components/quotes';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head"

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: `8vy6b3r4`,
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
            avatar: imgBuilder.image(p.author.image).width(50).height(50),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <>
      <Head>
        <Landing />
        <Blocks />
        <Quotes />
        <div className={styles.main}>
          <div className={styles.feed}>
            {mappedPosts.length ? mappedPosts.map((p, index) => (
              <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
                <div className={styles.category}>
                  {p.categories ? p.categories.map((c, index) => (
                    <span key={index}>#{c.title}</span>
                  )) : null}
                </div>
                <img className={styles.mainImage} src={p.mainImage} />
                <div className={styles.details}>
                  <img src={p.avatar} />
                  <div className={styles.author}>
                    <h3>{p.title}</h3>
                    <p>{p.author.name}</p>
                  </div>
                </div>
              </div>
            )) : <>No Posts Yet</>}
          </div>
        </div>
        <Footer />
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  const link = process.env.SANITY_API_TOKEN

  const query = encodeURIComponent(`*[ _type == "post" ]{ 
      title,
    slug,
    mainImage,
    author->,
    categories[]->,
      ttile,
    }
  `);

  const url = `${link}${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};