var todos = ["buy new turle"];

var input = prompt("What would you like to do?");

while (input !== "quit")
{
	if (input === "list") {
		listToDos();
	} else if (input === "new") {
		addToDo();
	}else if (input === "delete"){
		deleteToDo();
	}
	input = prompt("What would you like to do?");

}
console.log("Ok, YOU QUIT THE APP");

function listToDos() {
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("***********");
};

function addToDo() {
		//ask for new todo
		var newToDo = prompt("Enter new todo");
		todos.push(newToDo);
	};

	function deleteToDo() {
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice
	todos.splice(index, 1);
};