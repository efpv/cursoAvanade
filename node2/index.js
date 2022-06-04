const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var lista = [];

function getProduto(req, res) {
    res.send(lista);
}

function criandoProduto(req, res) {
    const produto = req.body;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id === produto.id);
    if (!produtoPesquisado) {
        lista.push(produto);
        res.send('Produto inserido com sucesso');
    } else {
        res.send(`Não é possível inserir,pois, já existe um produto com o id ${produto.id}`);
    }
}

function getProdutoById(req, res) {
    const produtoId = req.params.id;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id == produtoId);
    if(!produtoPesquisado){
        res.send(`Não existe um produto com o id ${produtoId}`)
    } else {
        res.send(produtoPesquisado);
    }
}

function deleteProduto(req, res) {
    const produtoId = req.params.id;
    lista = lista.filter((produto) => produto.id != produtoId);
    res.send(`Produto de id ${produtoId} foi removido com sucesso!`);
}

function updateProduto(req, res) {
    const produtoId = req.params.id;
    const produto = req.body;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id == produtoId);
    if(!produtoPesquisado){
        res.send(`Não existe um produto com o id ${produtoId}`)
    } else {
        produtoPesquisado.id = produto.id;
        produtoPesquisado.nome = produto.nome;
        produtoPesquisado.preco = produto.preco;
        produtoPesquisado.categoria = produto.categoria;
        produtoPesquisado.descricao = produto.descricao;
        res.send(`Produto de id ${produtoId} alterado com sucesso!`);
    }
}

app.get('/produto', getProduto);
app.get('/produto/:id', getProdutoById);
app.post('/produto', criandoProduto);
app.put('/produto/:id', updateProduto);
app.delete('/produto/:id', deleteProduto);


app.listen(3000);