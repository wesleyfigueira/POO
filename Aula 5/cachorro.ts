
class Cao{
    raca:string;
    cor:string;
    idade:number;
    valor:number;
    
    static listaCachorro:Cao[]=[];

    constructor(raca:string,cor:string,idade:number,valor:number){
        this.raca =raca;
        this.cor =cor;
        this.idade =idade;
        this.valor = valor;
    }

    static addCao(raca:string,cor:string,idade:number,valor:number){

        const novoCao = new Cao(raca,cor,idade,valor);
        Cao.listaCachorro.push(novoCao)
        console.log(`Um cão da Raça: ${raca} foi adicionado com sucesso `)
    }

    static showCao(){
        console.log(Cao.listaCachorro)
    }

}

