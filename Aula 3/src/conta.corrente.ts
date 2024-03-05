 
 
 export class contaCorrente extends contaGeral{
    
   chequeEspecial:number = -500;

   sacar(valor: number): boolean {
       let novoSaldo = this.saldo - valor;

       if(novoSaldo < this.chequeEspecial){
        return false;

       }else{
        super.sacar(valor);
       }

   }


}