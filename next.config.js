const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// const { PHASE_EXPORT } = require('next/constants');  // _PACOTES/OBJETOS__ QUE SÃO USADOS NOS IF CHECKS; são usados nos IF CHECKS PARA __ DIFERENCIAR __ O VALOR USADO nas 'environment variables', diferenciar os valores usados NO DEV MODE daqueles usados no PRODUCTION MODE, para as mesmas variáveis( variáveis em ambientes diferentes, com valores diferentes de acordo com o '''AMBIENTE''' (dev ou prod) em que estão... --> podemos observar isso em 'module.exports' e no código de nossa api de 'contact', nesse exemplo do blog....)

// const { PHASE_PRODUCTION_BUILD} = require('next/constants');

// const { PHASE_PRODUCTION_SERVER} = require('next/constants');










// module.exports = {
//   reactStrictMode: true,
//   env: {
//     ////EXEMPLO DE ENVIRONMENT VARIABLES
//     mongodb_username: 'madblurga',
//     mongodb_password: 'papanacuas',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'contactForms',
//   },
// };





module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {

    return {
    env: {
      ////EXEMPLO DE ENVIRONMENT VARIABLES
      mongodb_username: 'madblurga',
      mongodb_password: 'papanacuas',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'contactFormsTest', ////DATABASE USADA PARA A VERSÃO DE 'DEVELOPMENT', distinta da utilizada nas versões de 'PRODUCTION' (ver código mais abaixo)...
    }
  }

  
}

else {






  return {
    env: {
      ////EXEMPLO DE ENVIRONMENT VARIABLES
      mongodb_username: 'madblurga',
      mongodb_password: 'papanacuas',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'contactForms', ////DIFERENTE DATABASE PARA AS VERSÕES DE 'PRODUCTION'
    }
  }


}


};





































// EX:


// module.exports = (phase) => {

//  if (phase === 'PHASE_DEVELOPMENT_SERVER') {

//    return {
//    env: {
//      ////EXEMPLO DE ENVIRONMENT VARIABLES
//      mongodb_username: 'madblurga',
//      mongodb_password: 'papanacuas',
//      mongodb_clustername: 'cluster0',
//      mongodb_database: 'contactForms',
//    }
//  }
 
// }

// else {



//  return {
//    env: 
//    {
//      nabos: 'valor'
//    }
//  }
// }


// };





// ------------------------------



// OU SEJA, AGORA QUANDO ESTIVERMOS 'IN DEVELOPMENT MODE',



// NÓS VAMOS USAR 


// AQUELES 



// VALORES 


// DE ENV,

// aqueles 

// bem especificadinhos.... --> caso contrário (estivermos em QUALQUER COIAS QUE NÃO SEJA 

// 'DEV MODE'),


// VMAOS USAR 



// AQUELE VALOR DE 

// 'nabo'...