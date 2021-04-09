import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService {
    async getTodos(id) {
        let res = await sandboxApi.get("", id)
        ProxyState.images = res.data.url
        let todos = ProxyState.todos
    }

    async deleteTodo(id) {
        await sandboxApi.delete(ProxyState.todos.id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id !== ProxyState.todos.id)
    }

    async addTodo() {
        let res = await sandboxApi.post('Austin/Todos', id)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }


}

export const todoService = new TodoService();