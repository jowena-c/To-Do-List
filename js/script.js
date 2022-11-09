
var datetime = new Date().toDateString();
console.log(datetime); // it will represent date in the console of developer tool
document.getElementById("date").textContent = datetime; // represent on html page

function myClock() {         
    setTimeout(function() {   
      const d = new Date();
      const n = d.toLocaleTimeString();
      document.getElementById("demo").innerHTML = n; 
      myClock();             
    }, 1)
  }
  myClock();  

//trigger button click on Enter
var input = document.getElementById("todo");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("addBtn").click();
    }
});



let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTodo);


//add btn
function addTodo() {
    //get value from input
    let todo = document.querySelector("#todo").value;

    //get parent node
    let todoList = document.querySelector("#todoList");
    

    //create child node
    let todoItem = document.createElement("div");
    let todoInput = document.createElement("Input");
    todoInput.type = "text";
    todoInput.setAttribute("disabled", "");
    todoInput.value = todo;
    todoInput.defaultValue = todo;
    todoInput.style.borderRadius = "5px"
    todoInput.style.width = "200px"
    todoInput.style.padding = "5px"
  
    //create edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    // editBtn.innerHTML = "&#9998;";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);
    editBtn.style.borderRadius = "5px"
    editBtn.style.padding = "5px"
    editBtn.style.borderColor = "#8185E6"
    editBtn.style.backgroundColor = "white"
    editBtn.style.color = "#8185E6"


    //create delete btn
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "&#88;";
    // delBtn.textContent = "Delete";
    delBtn.classList = "delBtn";
    delBtn.style.borderRadius = "5px"
    delBtn.style.backgroundColor = "#E16E58"
    delBtn.style.color = "#FFFFFF"
    delBtn.style.padding = "5px 8px"


    // delBtn.addEventListener("click", delValue);
    delBtn.addEventListener("click", function(delCounter){
      todoItem.remove();
    });


    //append
    todoList.appendChild(todoItem);
    todoItem.appendChild(todoInput);
    todoItem.appendChild(delBtn);
    todoItem.appendChild(editBtn);


    //limiting addBtn
    let count = document.getElementById("todoList").childElementCount;
    console.log(count);

      if (count > 4) {
        document.getElementById("addBtn").disabled = true;
        // alert("Maximum number reached");
      }

    //edit button
    function editValue(){
        //remove disabled attribute
        todoInput.removeAttribute("disabled", "");

        //disable edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "");

        //create saveBtn
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);
        saveBtn.style.borderRadius = "5px"
        saveBtn.style.borderColor = "#8185E6"
        saveBtn.style.backgroundColor = "#8185E6"
        saveBtn.style.color = "white"
        saveBtn.style.padding = "5px"
        
        //append saveBtn
        todoItem.appendChild(saveBtn);
        
        function saveValue() {
            let text = "Are you sure you want to save " + todoInput.value + " as new task?";

            if (confirm(text) == true) {
                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //get value
                let newValue = todoInput.value;

                //to change the default value to the new value
                todoInput.defaultValue = newValue;
                console.log(newValue);

                //disable input type
                todoInput.setAttribute("disabled", "");

                //hide save button
                todoItem.removeChild(saveBtn);

                //add text to alert
                text = "Saved successfully";        
            } else {
                text = "Cancelled";

                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //disable input type
                todoInput.setAttribute("disabled", "");

                //hide save button
                // saveBtn.setAttribute("display", "none");
                todoItem.removeChild(saveBtn);

                //to change the value to its default value
                todoInput.value = todoInput.defaultValue;
            }
            alert(text);
        }
    }
}


