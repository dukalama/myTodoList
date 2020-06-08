//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")
const howtobtn = document.querySelector("#howto")
const contactbtn = document.querySelector("#contact")
const copybtn = document.querySelector(".copy");
const untoggle = document.querySelector(".foruntoggle");
// const feedback = document.querySelector("#feedback");
// const clkdname = document.querySelector("#name");
// const clkdemail = document.querySelector("#email");
// const clkdmsg = document.querySelector("#message");
// const removeCompleted = document.querySelector(".removeCompleted")





//event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
howtobtn.addEventListener('click', howtouse);
contactbtn.addEventListener('click', contactme);
copybtn.addEventListener('click', copyme);
untoggle.addEventListener('click', untogglenav);
// feedback.addEventListener('click', showFeedback);
// clkdname.addEventListener('click', lightlabeler1);
// clkdemail.addEventListener('click', lightlabeler2);
// clkdmsg.addEventListener('click', lightlabeler3);

// removeCompleted.addEventListener('click', removeCompletedTodo);





//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    if (todoInput.value === ""){
    	//todo div
	    const todoDiv = document.createElement("div");
	    todoDiv.classList.add("todo");
	   
	    //create li
        const newTodo = document.createElement('li');
        newTodo.setAttribute("id", "empty")
	    newTodo.innerText = "Delete me, I'm empty!";
	    newTodo.classList.add('todo-item');
	    todoDiv.appendChild(newTodo);
		//check mark button
	    const completedButton = document.createElement('button');
	    completedButton.innerHTML = '<i class="fas fa-check"></i>'
	    completedButton.classList.add("complete-btn");
	    todoDiv.appendChild(completedButton);
	    
	    //check trash button
	    const trashButton = document.createElement('button');
	    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
	    trashButton.classList.add("trash-btn");
	    todoDiv.appendChild(trashButton);
	   
	    //append to list
	    todoList.appendChild(todoDiv);
	    //clear todo input value
	    todoInput.value = "";
    } else {
        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        
        ///add todo to localstorage
        saveLocalTodos(todoInput.value)

        //check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        
        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
        //append to list
        todoList.appendChild(todoDiv);
        //clear todo input value
        todoInput.value = "";}
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    //check todo
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }   else{
                    todo.style.display = "none";
                }
                break
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                } else{
                    todo.style.display = "none";
                }
                break
        }
    })
}

function saveLocalTodos(todo){
    //check todo already exists
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);


        //check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //append to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    //check todo already exists
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    // const todoIndex = todo.children[0].innerText;
    // todos.splice(todos.indexOf(todoIndex),1);
    // localStorage.setItem("todos", JSON.stringify(todos));
    const todoIndex = Array.from(todoList.childNodes).indexOf(todo);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// function removeCompletedTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         if(todo.classList.contains("completed")){
//             const listoftodo =JSON.parse(localStorage.getItem("todos"));
//             const todoIndex = todo.children[0].innerText;  
//             listoftodo.splice(listoftodo.indexOf(todoIndex),1); 
//             console.log(listoftodo);
//             console.log(todoIndex);



//             todo.classList.add("fall");
//             todo.addEventListener('transitionend', function(){
//                 todo.remove();
//             })
//         }
//     })
// }

function howtouse() {
    const x = document.getElementById("howtouse");
    const y = document.getElementById("contactme");
    const z = document.getElementById("foruntoggle");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    }
} 

function contactme() {
    const y = document.getElementById("contactme");
    const x = document.getElementById("howtouse");
    const z = document.getElementById("foruntoggle");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "block";
    }
} 

function copyme() {
    // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    const x = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","@","."];
    
    el.value = (x[17]+x[14]+x[24]+x[9]+x[4]+x[6]+x[14]+x[37]+x[17]+x[0]+x[6]+x[17]+x[0]+x[6]+x[8]+x[14]+x[36]+x[24]+x[0]+x[7]+x[14]+x[14]+x[37]+x[2]+x[14]+x[12]);
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    alert("My Email has been copied." + "\n" + "For comments or suggestions please message me." + "\n" + "Thank you.");
 }

 function untogglenav(){
    const z = document.getElementById("foruntoggle");
    const y = document.getElementById("contactme");
    const x = document.getElementById("howtouse");
    //const showfeedback = document.getElementById("contact_section");
    if (z.style.display === "block") {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
       // showfeedback.style.display = "none";
    } else {
        z.style.display = "block";
    }
} 



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbutton_container');
    const navLinks = document.querySelectorAll('.navbutton_container li');
    
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        
        });
        //burger animation
        burger.classList.toggle('toggle');

    });



}

navSlide();


// function showFeedback(){
//     const showfeedback = document.getElementById("contact_section");
//     const z = document.getElementById("foruntoggle");
//     if (showfeedback.style.display === "flex") {
//         showfeedback.style.display = "none";
//     } else {
//         showfeedback.style.display = "flex";
//         z.style.display = "block";
//     }
// }

// function lightlabeler1(e){
//     const nameclick = document.getElementById("labeler1");
//     const emailclick = document.getElementById("labeler2");
//     const msgclick = document.getElementById("labeler3");

//     if (e.target === document.activeElement){
//         nameclick.classList.toggle("light_label");
//         emailclick.classList.toggle("off_label");
//         console.log(msgclick);

//         console.log(this, this.tagName, "is clicked");
//     }
// }    
// function lightlabeler2(e){
//     const nameclick = document.getElementById("labeler1");
//     const emailclick = document.getElementById("labeler2");
//     const msgclick = document.getElementById("labeler3");
    
//     if (e.target === document.activeElement){
//         emailclick.classList.toggle("light_label");
//        // emailclick.classList.toggle("off_label");
//         console.log(msgclick);

//         console.log(this, this.tagName, "is clicked");
//     }

//     console.log(e.target);
// }
// function lightlabeler3(e){
//     const nameclick = document.getElementById("labeler1");
//     const emailclick = document.getElementById("labeler2");
//     const msgclick = document.getElementById("labeler3");
//     console.log(e.target);

// }





document.addEventListener("DOMContentLoaded", function() {
    const fieldsName = document.getElementById('name');
    const fieldsEmail = document.getElementById('email');
    const fieldsMessage = document.getElementById('message');
})