import Head from 'next/head';

import { Fragment } from 'react';
import AllPosts from '../../components/Posts/AllPosts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

// const DUMMY_POSTS = [
//   //data PROVISÓRIA...
//   {
//     slug: 'getting-started-nextjs1',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-nextjs2',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-nextjs3',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//     date: '2022-02-10',
//   },
// ];

const AllPostsPage = (props) => {
  const { list } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related blog posts" />
      </Head>
      <AllPosts posts={list} />
    </Fragment>
  );
};

// export async function getStaticProps() {
//   return {};
// }

export async function getStaticProps(context) {
  const allPosts = getAllPosts();

  // console.log(allPosts);

  return {
    props: {
      list: allPosts,
    },
    revalidate: 600,
  };
}

export default AllPostsPage;
