import Link from 'next/link';
import { BungeeFont } from './bungeeFont';
export const FooterContent = ({ link, content }) => {

  return (
    <>
      <Link href={link}>
        <a target="_blank">
          <BungeeFont content={content} />
        </a>
      </Link>
    </>
  );
};
