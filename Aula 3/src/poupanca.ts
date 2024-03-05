class poupanca extends contaGeral{

    private taxaDeRendimento:number;

    set taxaDeRendimento(valor:number){
        if (valor <=0)
        return;
        this.taxaDeRendimento = valor;
    }

}
let p = new poupanca();
console.log(p.taxaDeRendimento);