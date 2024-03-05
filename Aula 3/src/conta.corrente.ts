class contaCorrente extends contaGeral{
    
   chequeEspecial:number = -500;

   sacar(valor: number): void {
       let novoSaldo = this.saldo - valor;

       if(novoSaldo < this.chequeEspecial){
        console.log(`você não tem limite para realizar esta operação de saque `)

       }else{
        super.sacar(valor);
       }

   }


}