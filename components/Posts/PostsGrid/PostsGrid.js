import PostsGridStyle from './PostsGrid.module.css';

import PostItem from '../../Posts/PostItem/PostItem';

const PostsGrid = (props) => {
  const { list } = props;

  return (
    <ul className={PostsGridStyle.Grid}>
      {list.map((listItem) => {
        return <PostItem key={listItem.slug} post={listItem}/>;
      })}
    </ul>
  );
};

export default PostsGrid;
