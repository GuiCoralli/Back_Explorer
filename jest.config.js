module.exports ={
  bail: true, //Com bail com a variável boleana "true", executa os testes e apartir do momento que um teste falhar ele para de verificar. 
  coverageProvider: "v8",//mecanismo utilizado para a coberutra do codigo

  testMatch: [
    "<rootDir>/src/**/*.spec.js" // Padrão dos arquivos de testes: dentro de qualquer pasta(**/), vai terum arquivo qualquer nome(*) que a extensão dele será (.spec.js) 
    //<rootDir> Variável Global que pegará a partir raiz do nosso projeto(/src) ,desde que tenha a variável (.spec.js), para rodar nosso testes.
  ],
  }                                                                                   