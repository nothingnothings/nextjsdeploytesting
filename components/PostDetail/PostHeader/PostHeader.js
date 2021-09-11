import Image from 'next/image';

import PostHeaderStyle from './PostHeader.module.css';

const PostHeader = (props) => {
  const { title, image, slug } = props;

  return (
    <header className={PostHeaderStyle.Header}>
      <h1>{title}</h1>
      <Image
        // src={`/images/posts/${slug}/${image}`}
        src={image}
        alt={title}
        height={150}
        width={200}
      />
    </header>
  );
};

export default PostHeader;
