import Head from 'next/head';

import { Fragment } from 'react';

import Hero from '../components/HomePage/Hero/Hero';

import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../helpers/posts-util';

// const DUMMY_POSTS = [
//   {
//       slug: 'getting-started-nextjs1',
//       title:  'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//       date: '2022-02-10'
//   },
//       {
//       slug: 'getting-started-nextjs2',
//       title:  'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//       date: '2022-02-10'
//   },
//       {
//       slug: 'getting-started-nextjs3',
//       title:  'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'NextJs is the React framework for production - it makes building fullstsack React apps and sites a breze and ships with built-in SSR...',
//       date: '2022-02-10'
//   },
// ]

const HomePage = (props) => {
  const { list } = props;

  return (
    <Fragment>
      <Head></Head>
      <Hero />
      <FeaturedPosts posts={list} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();
  // console.log(allPosts);
  return {
    props: {
      list: featuredPosts,
    },
    revalidate: 1800
  };
}

export default HomePage;
