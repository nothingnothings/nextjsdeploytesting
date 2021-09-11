import Link from 'next/link';

import Image from 'next/image';

import PostItemStyle from './PostItem.module.css';

const PostItem = (props) => {
  const { image, title, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // const imagePath = `/images/posts/${slug}/${image}`;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={PostItemStyle.Post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={PostItemStyle.Image}>
            <Image
              src={imagePath}
              height={200}
              width={300}
              alt={title}
              layout="responsive"
            />
          </div>
          <div className={PostItemStyle.Content}>
            {/* <h3>TITLE</h3>
                <time>July 13th 2022</time>
                <p>The excerpt</p> */}

            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;

//<Image /> --> VER AULA DE 'RENDER DUMMY DATA' PARA saber mais sobre a propridade/prop de 'layout' (que POR DEFAULT É 'intrinsic', mas aqui definimos como 'responsive', o que fará com que NOSSA IMAGE AUTOMATICAMENTE 'FILL OUT' a surround div que a encobre...)
