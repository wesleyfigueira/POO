class poupanca extends contaGeral{

    taxaDeRendimento:number;

    sacar(valor: number): boolean {
        let novoSaldo = this.saldo - valor;

        if (novoSaldo <0)
        return false;
    }
    return super.sacar(valor);
}
let p = new poupanca();
console.log(p.taxaDeRendimento);