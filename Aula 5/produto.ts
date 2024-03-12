//Exercício pra quarta (13/03)
//- Preciso de um produto que possua as informações de nome e preço.
//- Também preciso conseguir imprimir os detalhes do produto (nome e preço juntos na mesma mensagem).

//criar uma classe
class Produto{
    nome: string;
    preco:number;
    informacoes:string;
    static listaDeProdutos :Produto[] =[];

    //criar um objeto
    constructor(nome:string,preco:number,informacoes:string){
        this.nome =nome;
        this.preco =preco;
        this.informacoes=informacoes;
    }


    //Mostrar produtos cadastrados
    static showProdutos(){

        console.log(Produto.listaDeProdutos)
    }

    //add novos produtos

    static addProdutos(nome:string,preco:number,informacoes:string){
        const novoProduto = new Produto (nome,preco,informacoes);
        Produto.listaDeProdutos.push(novoProduto)

    }


}

Produto.addProdutos("camisa",190.99,"camisa polo vermelha");
Produto.addProdutos("camisa",199.99,"camisa polo cor Azul");
Produto.showProdutos();


// criar um console.log

