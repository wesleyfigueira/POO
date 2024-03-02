

class Cachorro {
    raca:string;
    paisOrigem:string;
    idade:number;

    constructor(raca:string,paisOrigem:string,idade:number) {
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