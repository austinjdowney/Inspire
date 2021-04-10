import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService {
    async getTodos() {
        let res = await sandboxApi.get('Austin/todos/')
        ProxyState.todos = res.data.map(t => new Todo(t));
    }

    async deleteTodo(id) {
        //let todos = ProxyState.todos.find(t => t.id === id)

        if (window.confirm("Todo Too hard, eh?")) {
            await sandboxApi.delete('Austin/todos/' + id)
            ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
        }
        console.log(res)
    }

    async addTodo(todo) {
        let res = await sandboxApi.post('Austin/todos/', todo)
        ProxyState.todos = [...ProxyState.todos, new Todo(todo)]
        ProxyState.todos.description = ProxyState.todos.description
        console.log(res)
    }

    async completedTodo(id) {
        let todoCompleted = ProxyState.todos.find(t => t.id === id)

        if (todoCompleted.completed) {
            await sandboxApi.put('Austin/todos/' + id, { completed: false })
            todoCompleted.completed = false
        } else {
            await sandboxApi.put('Austin/todos/' + id, { completed: true })
            todoCompleted.completed = true
        }
        ProxyState.todos = ProxyState.todos
        this.getTodos()
    }
}

export const todoService = new TodoService();