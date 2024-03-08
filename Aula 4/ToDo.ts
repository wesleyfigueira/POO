//Criar Nova Tarefa
//concluir tarefa
// Remover uma tarefa
//imprimir lista de tarefas


class ListaDeTarefas {

    tarefa: string;
    id:number;
    status:boolean;

    constructor(tarefa:string, id:number,status:boolean) {
        this.tarefa =tarefa;
        this.id =id;
        this.status=status
    }

    task(){
        console.log(`${this.modelo}`)
    }
}

const meucarro = new Veiculo("polo",30,"volkswagen");

meucarro.montar()
