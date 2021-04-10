import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _draw() {
    let compeletedTodos = ProxyState.todos.filter(t => t.completed == true).length
    let lengthTodos = ProxyState.todos.length
    let template = ''
    template += `<p>${compeletedTodos}/${lengthTodos}</p>`

    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById("todos").innerHTML = template
    //document.getElementById("lengthTodos").innerText = lengthTodos.toString()
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

    async deleteTodo(id) {
        try {
            await todoService.deleteTodo(id)
        } catch (error) {
            console.error
        }
    }

    addTodo() {
        window.event.preventDefault();
        let form = window.event.target
        let rawTodo = {
            description: form.description.value
        }

        todoService.addTodo(rawTodo)
        form.reset()
    }
    async completedTodo(id) {
        try {
            await todoService.completedTodo(id)
        } catch (error) {
            console.error
        }
    }
}