import Head from 'next/head';

import FeaturedPostsStyle from './FeaturedPosts.module.css';

import PostsGrid from '../../Posts/PostsGrid/PostsGrid.js';

const FeaturedPosts = (props) => {
  // const { featuredPosts } = props;

  return (
    <section className={FeaturedPostsStyle.Latest}>
      <Head></Head>
      <h2>Featured Posts</h2>
      {/* 
      {  ////PROFESSOR VAI CRIAR UM COMPONENT SEPARADO PARA ISSO... O COMPONENT 
        featuredPosts.map(
          () => {

          }
        )

      } */}
      {/* <PostsGrid  list={featuredPosts}/> */}
      <PostsGrid  list={props.posts}/>
    </section>
  );
};

export default FeaturedPosts;
