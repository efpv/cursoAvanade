//1 - Crie uma função que retorne o seu nome
function meuNome(){
    return "Erick Vieira";
}
meuNome();

//2 - Crie uma função que retorne o nome passado por parâmetro
function dizerOla(nome){
    console.log("Olá " + nome);
}
dizerOla("Erick Vieira");

//3 - Faça uma função para dividir 2 números
function dividir(a,b){
    return a / b;
}
dividir(10,2);

//4 - faça uma função que retorne um array com o nome dos alunos presentes na aula
function alunosPresentes(){
    return ['Erick','André','Cassia','Felipe','Nilce'];
}
alunosPresentes();

//5 - faça uma função que recebe um array e um valor, adicione o valor no array e retorne o array
function adicionarArray(arr, valor){
    arr.push(valor);
    return arr;
}
adicionarArray();