import PostHeader from '../PostHeader/PostHeader';

import PostContentStyle from './PostContent.module.css';

import ReactMarkdown from 'react-markdown'; ///usado para TRADUZIR 'MARKDOWN' (linguagem conveniente para ESCREVER TEXTOS) em 'RENDERABLE' JSX CODE....

// import SyntaxHighLighter from 'react-syntax-highlighter';  /// VERSÕES ___ DEFAULT/STANDARD DE 'react-syntax-highlighter'....  -------> SÃO SUBÓPTIMAS, MT PESADAS, PIORAM O DESEMPENHO DE NOSSAS PÁGINAS... ---> VOCÊ DEVE USAR A VERSÃO 'LIGHT' DE 'reactsyntaxhighlighter', em vez disso --->
// import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';///  A DIFERENÇA ENTRE A  VERSÃO LIGHT E A STANDARD (Que estamos usando) É __ QUE  A VERSÃO  'STANDARD' SUPORTA 'SYNTAX HIGHLIGHTING' PARA ___ TODAS ___ AS POSSÍVEIS LINGUAGENS DE PROGRAMAÇÃO ( o que é um exagero, considerando...)

import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter'; //VERSÃO 'LIGHT' do TPP DO REACTSYNTAXHIGHLIGHTER... -> você deve usar essa versão pq ELA PESA MENOS do que a outra (bem menos)...

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'; //////ESSA VARIÁVEL/OBJETO É NECESSÁRIO PARA FAZER A BUILD 'LIGHT'/DIET DE 'REACT-SYNTAX-HIGHLIGHTER' __FUNCIONAR__ (ver o código de ''' ReactSyntaxHighlighter.registerLanguage('js', js);''')

// import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'; ///SUBOPTIMIZADO.

import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'; //optimizado, importamos ESPECIFICAMENTE esse estilo aí, e nenhum outro...



import Image from 'next/image';

// const DUMMY_POST =
//   ///PROVISÓRIO
//   {
//     slug: 'getting-started-nextjs1',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     date: '2022-02-10',
//     content: '# This is a title, and a "markdown" example ',
//   };



const PostContent = (props) => {
  // const imagePath = `images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  const { post } = props;

  // console.log(post);
  ReactSyntaxHighlighter.registerLanguage('js', js);

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // return (
  //   <article className={PostContentStyle.Content}>
  //     <PostHeader
  //       title={DUMMY_POST.title}
  //       // image={DUMMY_POST.image}
  //       image={imagePath}
  //       slug={DUMMY_POST.slug}
  //     />
  //     {/* {DUMMY_POST.content} ///MANEIRA __ ERRADA__ DE OUTPUTTAR CONTEÚDO QUE DEVE SER 'MARKDOWN'.. --> COLOCAR SEU 'PLAINTEXT' do markdown DENTRO DE '{}' NÃO VAI O TRADUZIR AUTOMATICAMENTE; NÃO, VOCÊ PRECISA DO COMPONENT 'ReactMarkdown' PARA ISSO, obtido por meio de 'npm install react-markdown'... --. AÍ, VOCÊ VAI LÁ E COLOCA SEU CÓDIGO 'markDown' ENTRE AS OPENING E CLOSING TAGS DESSE COMPONENT '<ReactMarkdown />'.... */}
  //     <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
  //   </article>
  // );

  const customRenderers = {
    // img(image) { //esta é a sintaxe correta. Não siga o vídeo do professor, siga o site do árabe:  https://amirardalan.com/blog/use-next-image-with-react-markdown        E TAMBÉM              https://dev.to/shareef/rendering-markdown-made-easy-with-react-markdown-in-reactjs-and-nextjs-web-apps-259d
    //   return (  ///OBS: este bloco de 'img(image)' se tornou DESNECESSÁRIO em razão da existência do bloco LOGO ABAIXO, que faz tudo o  que este bloco faz e __MAIS__ (pq também remove os erros de 'wrapping paragraph' que aparecem no console do browser)....
    //     <Image     ////o código de 'p(p)' é essencialmente o mesmo que este, mas melhor... ---> sempre tenha aquele código de p(p) {...} como referência/copie ele nos seus próximos projetos, quando quiser enfiar IMAGES no meio dos seus posts/conteudo markdown com NEXTJS...
    //       src={`/images/posts/${post.slug}${image.src}`}
    //       alt={image.properties.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    p(p) {
      //esta é a sintaxe correta. Não siga o vídeo do professor, siga o site do árabe:  https://amirardalan.com/blog/use-next-image-with-react-markdown        E TAMBÉM              https://dev.to/shareef/rendering-markdown-made-easy-with-react-markdown-in-reactjs-and-nextjs-web-apps-259d
      const { node } = p;

      if (node.children[0].tagName === 'img') {
        ///esta é a sintaxe correta
        const image = node.children[0]; ////ISSO VAI NOS DAR NOSSA 'image', essencialmente...

        return (
          <div className={PostContentStyle.Image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`} ///essa é a sintaxe correta
              alt={image.properties.alt} //essa é a sintaxe correta
              width={800}
              height={500}
            />
          </div>
        );
      }

      return <p>{p.children}</p>;
    },

    code(code) {
      ///USADO COM CODE SNIPPETS... --> muda a renderização de nossos code snippets...
      // const { className, children, language } = code; /////////// 'language' -------> ESSA PROPRIEDADE NÃO EXISTE MAIS, FOI SUBSTITUÍDA POR 'className'...
      const { className, children } = code;

      console.log(code.className); ////''''className''''' --->  className vai sempre ser algo como 'language-js', 'language-json', 'language-ruby', a partir do  """" ```json``` ou qualquer outra merda que você escreveu lá no seu arquivo markdown que acaba virando esse seu post aqui....

      const language = className.split('-')[1]; ///isso aqui vai retornar 'js', que é EXATAMENTE O QUE QUEREMOS (queremos só 'js', e não 'language-js')

      console.log(language); ////retorna 'js'...

      return (
        <ReactSyntaxHighlighter
          style={darcula}
          children={children}
          language={language}
        />
      );
    },

    // strong() { ///exemplos de coisas/elementos cuja renderização default, a partir de markdown files, você pode OVERWRITTAR por meio de 'renderers={}' e esse objeto aqui...

    // },

    // ul() {

    // }
  };

  return (
    <article className={PostContentStyle.Content}>
      <PostHeader
        title={post.title}
        // image={DUMMY_POST.image}
        image={imagePath}
        slug={post.slug}
      />
      {/* {DUMMY_POST.content} ///MANEIRA __ ERRADA__ DE OUTPUTTAR CONTEÚDO QUE DEVE SER 'MARKDOWN'.. --> COLOCAR SEU 'PLAINTEXT' do markdown DENTRO DE '{}' NÃO VAI O TRADUZIR AUTOMATICAMENTE; NÃO, VOCÊ PRECISA DO COMPONENT 'ReactMarkdown' PARA ISSO, obtido por meio de 'npm install react-markdown'... --. AÍ, VOCÊ VAI LÁ E COLOCA SEU CÓDIGO 'markDown' ENTRE AS OPENING E CLOSING TAGS DESSE COMPONENT '<ReactMarkdown />'.... */}
      {/*  use 'COMPONENTS' em vez de 'renderers' -- sintaxe NOVA, suportada...*/}
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

// {
//   /* <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown> MANEIRA CORRETA DE TRADUZIR CONTEÚDO MARKDOWN EM 'RENDERABLE JSX CODE'...*/
// }
