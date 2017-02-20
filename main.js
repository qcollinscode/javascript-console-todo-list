var todos = [];
var input = prompt("What would you like to do?");


while(input !== "quit") {
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    newTodo();
  } else if(input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

function listTodos() {
  console.log("***************");
  for(var x = 0; x < todos.length; x++) {
    console.log([x + 1] + ". " + todos[x]);
  }
  console.log("***************");
}

function newTodo() {
  var newTodo = prompt("Enter new todo.");
  todos.push(newTodo);
  console.log("'" + newTodo + "'" + " : Was added to the list!");
}

function deleteTodo() {
  var index = prompt("Enter the number of the todo.");
  var newIndex = index - 1;
  todos.splice(newIndex, 1);
  console.log("Item deleted!");
}

console.log("OK, Bye!");
