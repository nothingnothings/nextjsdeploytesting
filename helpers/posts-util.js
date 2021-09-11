// import fs from 'fs/promises';

// // import fs from 'fs';

// import path from 'path';

// export async function getAllPosts() {
//   const pathName = path.join(process.cwd(), 'content', 'posts');

//   const fileNames = await fs.readdir(pathName);

//   console.log(fileNames);

//   for (let file of fileNames) {
//     const absolutePath = path.join(pathName, file);
//     console.log(absolutePath);

//     const data = await fs.readFile(absolutePath);

//     console.log(data.toString());

//     return data.toString();
//   }
// }

import path from 'path';

import fs from 'fs';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');




export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}



export function getPostData(postIdentifier) {
  ////código mais FLEXÍVEL que o de baixo (isso pq pode/será chamado em '[slug].js' também, além de ser chamado em 'getAllPosts'...)
  /////vai retornar um OBJETO com a 'postData'...
  const postSlug = postIdentifier.replace(/\.md$/, ''); ////REMOVES THE FILE EXTENSION FROM 'fileName'( o '.md' no nome do arquivo...)
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8'); ////////EIS O CÓDIGO EM QUESTÃO...
  // console.log(fileContent);

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// function getPostData(fileName) {
//   /////vai retornar um OBJETO com a 'postData'...
//   const filePath = path.join(postsDirectory, fileName);
//   const fileContent = fs.readFileSync(filePath, 'utf-8'); ////////EIS O CÓDIGO EM QUESTÃO...
//   console.log(fileContent);

//   const { data, content } = matter(fileContent);

//   const postSlug = fileName.replace(/\.md$/, ''); ////REMOVES THE FILE EXTENSION FROM 'fileName'( o '.md' no nome do arquivo...)

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

export function getAllPosts() {
  // const postFiles = fs.readdirSync(postsDirectory);


  const postFiles = getPostsFiles();

  const postsData = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // console.log(postsData, 'LINE');

  postsData.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });

  // console.log(postsData);

  return postsData; ///retorna um ARRAY CHEIO DE 'POSTDATA', objetos 'postData'....
}

// async function readingDirectory(directory) {
//   const fileNames = await fs.promises.readdir(directory);
//   for (let file of fileNames) {
//       const absolutePath = path.join(directory, file);
//       log(absolutePath);

//       const data = await fs.promises.readFile(absolutePath);
//       log(data);
//   }
// }

// readingDirectory(folder).then(() => {
//   log("all done");
// }).catch(err => {
//   log(err);
// });

// const response = await fetch();
// ///URL GOES HERE
// const data = await response.json();

// const posts = [];

// for (const key in data) {
//   posts.push({
//     id: key,
//     ...data[key], /////////ISSO É ÚTIL; PROFESSOR USA O SPREAD OPERATOR PARA RESUMIR TODOS AQUELES CAMPOS DE 'location', 'date', 'title', etc etc...
//   });
// }

// return events; ///EIS O CÓDIGO EM QUESTÃO.

export function getFeaturedPosts() {
  const allPosts = getAllPosts(); /////eis o código em questão.

  return allPosts.filter((post) => post.isFeatured);
}

// export async function getPostById(id) {
//   const allPosts = await getAllPosts();
//   return allPosts.find((post) => post.id === id);
// }
