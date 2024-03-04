
class veiculos {

    tipo: string;
    modelo:string;
    valor:number;
    anoFabricacao:number;

    constructor(tipo:string,modelo:string,valor:number,anoFabricacao:number) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.valor = valor;
        this.anoFabricacao = anoFabricacao;
        
    }

    avaliacao(){
        console.log(`está carro é um ${this.tipo} do modelo ${this.modelo} e tem o valor de $ ${this.valor} ano de fabricaçao ${this.anoFabricacao}`)
    }
}

const polo =new veiculos("Volkswagen" ,"Polo",63800,2019);



polo.avaliacao();
