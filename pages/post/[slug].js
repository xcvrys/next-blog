import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/css/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { AuthorCard } from '../../components/authorCard';
import { Likes } from '../../components/card_components/likes';

export const Post = ({ title, body, image, slug, date, likes, author_name, author_slug, author_image, author_bio }) => {
  const [imageUrl, setImageUrl] = useState('');
  const publishDate = date.slice(0, 10);


  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: `8vy6b3r4`,
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);



  console.log(slug);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.blog}>
          <h1>{title}</h1>
          {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
          <div className={styles.body}>
            <BlockContent blocks={body} />
            <div className={styles.date}>
              <p>{publishDate}</p>
              <Likes likes={likes} />
            </div>
          </div>
        </div>
        <AuthorCard author_name={author_name} author_slug={author_slug} author_image={author_image} author_bio={author_bio} />
      </div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  const link = process.env.SANITY_API_TOKEN

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]{  
    title,
    mainImage,
    body,
    slug,
    publishedAt,
    author->,
    likes
  }`);
  const url = `${link}${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        date: post.publishedAt,
        slug: post.slug.current,
        likes: post.likes,
        author_name: post.author.name,
        author_bio: post.author.bio,
        author_image: post.author.image,
        author_slug: post.author.slug,
      }
    }
  }
};

export default Post;
