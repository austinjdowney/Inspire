export default class Todo {
    constructor(data) {
        this.description = data.description
        this.id = data.id
        this.completed = data.completed

    }

    get Template() {

        //let todos = ProxyState.todos.filter(t => t.Id === this.id)
        //let total = todos.length
        //let completed = todos.filter(t => t.completed).length


        if (this.completed) {
            return /*html*/ `
  <div class="row  mb-2 bg-dark text-light">
    <div class="col-2">
      <button onclick="app.todosController.completedTodo('${this.id}')" class="btn btn-success"><i class="fas fa-check-square"></i></button>
    </div>
    <div class="col-8">
      <h6 class="strikeThrough text-center ">${this.description}</h6>
    </div>
    <div class="col-2">
      <button onclick="app.todosController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
    </div>
</div>
    `
        } else {
            return /*html*/ `
  <div class="row mb-2 bg-dark text-light">
    <div class="col-2">
      <button onclick="app.todosController.completedTodo('${this.id}')" class="btn btn-success"><i class="fas fa-check-square"></i></button>
    </div>
    <div class="col-8">
      <h6 class="text-center">${this.description}</h6>
    </div>
    <div class="col-2">
      <button onclick="app.todosController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
    </div>
</div>
    `
        }
    }



    //get Todos() {
    //    let todo = ProxyState.todos.filter(t => t.todoId === this.id)
    //    let template = ''
    //    todo.forEach(t => template += t.Template)
    //    return template
}
