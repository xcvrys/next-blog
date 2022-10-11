import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import style from '../../styles/css/author.module.css';
import { Back } from '../../components/card_components/back';
import { Footer } from '../../components/footer';
import { useRouter } from 'next/router';



export const Post = ({ name, image, bio, posts }) => {
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: '8vy6b3r4',
      dataset: 'production',
    });
    setImageUrl(imgBuilder.image(image).width(250).height(250));
  }, [image]);


  return (
    <>
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.author}>
            {imageUrl && <img src={imageUrl} />}
            <h1>{name}</h1>
            <BlockContent blocks={bio} />
          </div>
          <div>
            <Back />
            <div className={style.posts}>
              <p>{name} posts:</p>
              {posts.map((post, index) => (
                <div className={style.post} key={index}>
                  <div onClick={() => router.push(`/post/${post.slug.current}`)}>
                    <p>{post.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  const link = process.env.SANITY_API_TOKEN

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(
    `*[ _type == "author" && slug.current == "${pageSlug}"]{
        name,
        bio,
        image,
        "posts": * [_type == "post" && author -> slug.current == "${pageSlug}"]{
        title,
        slug,
      }
    }
      `);

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
        name: post.name,
        image: post.image,
        bio: post.bio,
        posts: post.posts,
      }
    }
  }
}


export default Post;