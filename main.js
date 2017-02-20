var todos = [];
var input = prompt("What would you like to do?");


while(input !== "quit") {
  if(input === "list") {
    for(var x = 0; x < todos.length; x++) {
      console.log([x + 1] + ". " + todos[x]);
    }
  } else if(input === "new") {
    var newTodo = prompt("Enter new todo.");
    todos.push(newTodo);
  }
  input = prompt("What would you like to do?");
}

console.log("OK, Bye!");
