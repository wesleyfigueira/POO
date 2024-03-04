class contaGeral{
    agencia: number;
    numeroDaconta: number;
    saldo: number;
    movimentacoes: string[] = [];

    
    sacar(valor:number): void{

        // calculo de retirada
        let novoSaldo = this.saldo - valor ;
        // mensagem de retirada
        let mensagemExtrato =`você sacou ${valor} | Saldo anterior: | ${this.saldo}  |saldo atualizado:| ${novoSaldo}`;
         
        this.saldo = novoSaldo;

        //registrar movimentação
        this.movimentacoes.push(mensagemExtrato);

    }
    consultarSaldo (): number{
        return this.saldo;
    }

    depositar(valor:number): void{
        let novoSaldo = this.saldo + valor;
        let mensagemExtrato = `você depositou |${valor} saldo anterior : |${this.saldo} | Saldo Atuaalizado: ${novoSaldo}`;

        this.saldo =novoSaldo;
        this.movimentacoes.push(mensagemExtrato);
    }
    consultarExtrato():string[]{
        return this.movimentacoes;

    }
}