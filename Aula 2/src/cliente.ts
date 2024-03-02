//encapsulamento
//modificadores de Acesso: private, protected, public

//npx --version cria o tsconfig
//npm i typescript --save-dev cria a pasta node

export class Cliente{
    private nome: string;
    private _dataNascimento?: Date;

    constructor(){
        this.nome="Wandelson";
        
    }

    public set dataNascimento(data:Date){
        this._dataNascimento = data;
    }

}
let cliente =new Cliente();
