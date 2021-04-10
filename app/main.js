import WeathersController from "./Controllers/WeathersController.js"
import QuotesController from "./Controllers/QuotesController.js"
import ImagesController from "./Controllers/ImagesController.js"
import TodosController from "./Controllers/TodosController.js"
//import ClocksController from "./Controllers/ClocksController.js"

class App {
  weathersController = new WeathersController();
  quotesController = new QuotesController();
  imagesController = new ImagesController();
  todosController = new TodosController();
  //clocksController = new ClocksController();
}

window["app"] = new App();
