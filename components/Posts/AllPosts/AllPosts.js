import AllPostsStyle from './AllPosts.module.css';

import PostsGrid from '../PostsGrid/PostsGrid';

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={AllPostsStyle.Posts}>
      <h1>All Posts</h1>
      <PostsGrid list={posts} />
    </section>
  );
};

export default AllPosts;
