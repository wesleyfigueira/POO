//Criar Nova Tarefa

class ToDoList{

    taskList:string [];

    constructor(){
        this.taskList =[]
    }

    addTask(tarefa:string){
        this.taskList.push(tarefa)
        console.log(`Tarefa "${tarefa}" criada.`);

    }
}

const listaDeTarefas = new ToDoList();
listaDeTarefas.addTask("comprar Pão");
listaDeTarefas.addTask("comprar Ovo");
listaDeTarefas.addTask("comprar Manteiga");
//concluir tarefa
// Remover uma tarefa
//imprimir lista de tarefas

