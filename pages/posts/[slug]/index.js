// import Head from 'next/head';

import { getPostData, getPostsFiles } from '../../../helpers/posts-util';

import { Fragment } from 'react';

import Head from 'next/head';

import PostContent from '../../../components/PostDetail/PostContent/PostContent';

const PostDetailPage = (props) => {
  const { neededPostData } = props;

  return (
    <Fragment>
      <Head>
        <title>{neededPostData.title}</title>
        <meta name="description" content={neededPostData.excerpt} />
      </Head>
      {/* <PostDetail/> */}
      <PostContent post={neededPostData} />
    </Fragment>
  );
};

// export async function getStaticProps(context) {
//   const { params } = context;

//   const slugId = params.slug;

//   console.log(slugId);

//   const postData = await getPostById(slugId);

//   return {
//     props: {
//       neededPostData: postData,
//     },

//     revalidate: 60,
//   };
// }

// export async function getStaticPaths(context) {
//   const postData = await getFeaturedPosts();

//   const postPaths = postData.map((dataObject) => ({
//     params: { slugId: dataObject.id.toString() },
//   }));

//   return {
//     postPaths,
//     fallback: true,
//   };
// }

export async function getStaticProps(context) {
  const { params } = context;

  const slugId = params.slug;

  console.log(slugId);

  const postData = getPostData(slugId);

  return {
    props: {
      neededPostData: postData,
    },

    revalidate: 600,
  };
}

export async function getStaticPaths(context) {
  // const postData = getFeaturedPosts(); ///isso vai pegar TODA A DATA desses arquivos, o que é DESNECESSÁRIO (overkill, queremos só OS 'FILENAMES', para construir os paths....)

  // const postPaths = postData.map((dataObject) => ({
  //   params: { slugId: dataObject.slug.toString() },
  // }));

  const postPathFileNames = getPostsFiles();

  const postPaths = postPathFileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') }, ////OBS: esse 'replace' é necessário para REMOVER O FINAL DE '.md' de nosso '''slug''' (senão, isso vai acabar bugando o aplicativo, pq queremos que nossos 'slug' sejam limpos, sem esses finais com '.md'...)
  }));

  console.log(postPaths);

  return {
    paths: postPaths,
    fallback: false,
  };
}

export default PostDetailPage;
