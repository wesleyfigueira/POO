//Criar Nova Tarefa

class ToDoList{

    taskList:string [];
    id:number;
    idInicial:number= 0
    status: boolean;

    constructor(){
        this.taskList =[]
        this.id= this.idInicial;
        this.status = false;

    }

    addTask(tarefa:string){
        this.taskList.push(tarefa)
        console.log(`Tarefa "${tarefa}" criada.`);

    }

    readTask(){
        console.log("Tasks:");

        this.taskList.forEach((task,i)=>{
            console.log(`${i + 1}. ${task}`);
        });

    }

    upDateTask(){
        this.taskList.findIndex()
    }

    // tarefa Read
}

const listaDeTarefas = new ToDoList();
listaDeTarefas.addTask("comprar Pão");
listaDeTarefas.addTask("comprar Ovo");
listaDeTarefas.addTask("comprar Manteiga");
//concluir tarefa

// Remover uma tarefa
//imprimir lista de tarefas

