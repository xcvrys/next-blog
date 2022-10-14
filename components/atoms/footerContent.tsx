import Link from 'next/link';

export const FooterContent = ({ link, content }) => {

  return (
    <>
      <Link href={link}>
        <a target="_blank">{content}</a>
      </Link>
    </>
  );
};
