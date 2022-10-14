import Image from 'next/image'

export const AuthorPictureExtraSmall = ({ image }) => {
  return (
    <>
      {image &&
        <Image
          src={image}
          layout="intrinsic"
          alt="Author Image"
          width={50}
          height={50}
        />}
    </>
  );
}

export const AuthorPictureSmall = ({ image }) => {
  return (
    <>
      {image &&
        <Image
          src={image}
          layout="fixed"
          alt="Author Image"
          width={75}
          height={75}
        />}
    </>
  );
}

export const AuthorPictureBig = ({ image }) => {
  return (
    <>
      {image &&
        <Image
          src={image}
          layout="fixed"
          alt="Author Image"
          width={300}
          height={300}
        />}
    </>
  );
}

