import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _draw() {
    let template = ''
    ProxyState.todos.forEach(t =>
        template += `<li class="d-flex justify-content-start"><input class="form-check-input position-static m-2" checked type="checkbox" id="checkedboxes" value="option1"
                        aria-label="...">${this.title} <i class="fas fa-times ml-2 text-danger"
                        onclick="app.todosController.deleteTodo('${this.id}')"></i></li>`)
    document.getElementById("todos").innerHTML = template
}

//Public
export default class TodosController {
    constructor() {
        ProxyState.on("todos", _draw);
        this.getTodos()
    }

    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error
        }
    }
    async deleteTodo() {
        try {
            await todoService.deleteTodo()
        } catch (error) {
            console.error
        }
    }

    async addTodo() {
        try {
            await todoService.addTodo()
        } catch (error) {
            console.error
        }
    }
}