export default class Todo {
    constructor(title, id, completed) {
        this.title = title
        this.id = id
        this.completed = completed

    }

    get Template() {

        let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
        let total = tasks.length
        let completed = tasks.filter(t => t.completed).length

        return /*html*/`
        <li class="d-flex justify-content-start"><input class="form-check-input position-static m-2" checked type="checkbox" id="checkedboxes" value="option1"
                        aria-label="...">${this.title} <i class="fas fa-times ml-2 text-danger"
                        onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        
        
        `
    }
    get Todos() {
        let Tsks = ProxyState.tasks.filter(t => t.todoId === this.id)
        let template = ''
        Tsks.forEach(t => template += t.Template)
        return template
    }
}