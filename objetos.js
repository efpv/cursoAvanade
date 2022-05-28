//1 - Faça uma função que retorne um objeto que represente você, com os seguintes atributos: 

//escreverNome: função que escreve seu nome
//filhos: array de objetos, o objeto filho precisa ter nome e idade
//nome: string
//idade: inteiro
//altura: ponto flutuante
//habilitado: boolean
//corCabelo: string
//cursos: array
//mae: objeto com nome e idade

var pessoa = {nome: "Erick", idade: 37, altura: 1.70, habilitado: true, cabelo: "castanho", cursos: ["LPIC1","AZURE ESSENTIALS","ORACLE OCI"], filhos: [{nome: "Isaac", idade: 15},{nome: "Lucas", idade: 6}], mae: {nome: "Roseli", idade: 72, altura: 1.54}}

function exibirPessoa (){
    return pessoa;}
//2 - faça uma função que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.

//3 - faça uma função que utilize a função 1 e obtenha somente o nome dos filhos com mais de 1 ano de idade.
