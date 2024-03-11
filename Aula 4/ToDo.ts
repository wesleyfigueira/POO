class ToDoList {
    id: number;
    descricao: string;
    status: boolean;
    static taskList: ToDoList[] = [];

    idInicial: number = 0

    constructor(descricao: string) {
        this.id = this.idInicial;
        this.descricao = descricao;
        this.status = false;
    }

    updateTask() {
        this.status = true;
        console.log(`\nTarefa "${this.descricao}" concluída.`);
    }

    static addTask(descricao: string) {
        const novaTarefa = new ToDoList(descricao);
        ToDoList.taskList.push(novaTarefa)
        console.log(`\nTarefa "${descricao}" criada.`);
    }

    static deleteTask(index: number) {
        if (index >= 0 && index < ToDoList.taskList.length) {
            const deletedTask = ToDoList.taskList[index];
            ToDoList.taskList.splice(index, 1);
            console.log(`\nTarefa nº ${index + 1}: "${deletedTask.descricao}" removida com sucesso.`);
        } else {
            console.log(`Índice inválido: ${index}`);
        }
    }

    static readTask() {
        console.log("\nTasks:");
        ToDoList.taskList.forEach((task, i) => {
            const status = task.status ? "Concluído" : "Pendente";
            console.log(`${i + 1}. ${task.descricao} (${status})`);
        });
    }
}


ToDoList.addTask("Comprar Pão");
ToDoList.addTask("Comprar Ovo");
ToDoList.addTask("Comprar Manteiga");
ToDoList.addTask("Comprar Computador novo")

ToDoList.readTask();

ToDoList.taskList[0].updateTask();

ToDoList.readTask();

ToDoList.deleteTask(1);

ToDoList.readTask();