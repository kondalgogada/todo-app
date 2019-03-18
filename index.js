
window.onload = function() {
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");	
	var btnClr = document.getElementById("btnClr");	
	var id = 1;
	var liItem = "";
	var todoList = [];

	btn.addEventListener("click", addTodoItem);

	list.addEventListener("click", boxChecked);

	
	btnClr.addEventListener("click", clearList);

	
	function addTodoItem() {
		if(input.value === "") {
			alert("You must enter some value!");
		}
		else {
			if(list.style.borderTop === "") {
				console.log("here!")
				list.style.borderTop = "2px solid white";
				btnClr.style.display = "inline";
			}
			var text = input.value;	
			var item = `<li id="li-${id}">${text}</li>`;				
			list.insertAdjacentHTML('beforeend', item);	
			liItem = {item: text, checked: false};
			todoList.push(liItem);		
			id++;
			addToLocalStorage()
			form.reset();
		}
	}

	
		function boxChecked(event) {
			const element = event.target;
			if(element.type === "checkbox") {
				todoList = JSON.parse(localStorage.getItem("todoList"));
				todoList[element.id.split('-')[1]-1].checked = element.checked.toString();
				localStorage.setItem("todoList", JSON.stringify(todoList));
			}
		}
	function displayList() {
		list.style.borderTop = "2px solid white";
		todoList = JSON.parse(localStorage.getItem("todoList"));
		todoList.forEach(function(element) {
			console.log(element.item)
			var text = element.item;
			list.insertAdjacentHTML("beforeend", item);
			id++;
		});
	}

	function clearList() {
		todoList = [];
		localStorage.clear();
		list.innerHTML = "";
		btnClr.style.display = "none";
		list.style.borderTop = "";
	}
}