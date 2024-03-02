// teste para entendimento de poo
class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const wesley =new Pessoa();
wesley.idade =30;
wesley.nome= "Wandelson Figueira"


console.log(wesley)
wesley.descrever()



class Cachorro {
    raca;
    paisOrigem;
    idade;

    constructor(raca,paisOrigem,idade) {
        this.raca = raca;
        this.paisOrigem= paisOrigem;
        this.idade=idade
    }

    descrever(){
        console.log(`Ola sou um caozinho de ${this.paisOrigem} e tenho ${this.idade} de idade e sou um ${this.raca} Gostariade me adotar`)
    }
}

const poodle = new Cachorro("poodle","germany",2)


poodle.descrever()