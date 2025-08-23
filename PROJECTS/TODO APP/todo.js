let tasktext = document.querySelector(".task-text");
let todoinput = document.querySelector("#todo-input");
let thumb = document.querySelector(".thumb");
let deletebtn = document.querySelector(".delete-btn");
let addbtn = document.querySelector("#add-btn");

todoinput.addEventListener("input", function() {
    console.dir(todoinput.value);
    tasktext.textContent = todoinput.value;
}) 

circle.addEventListener("click", function(x) {
    x.preventDefault();
    circle.style.backgroundColor = "rgba(79, 137, 26, 1)";
    tasktext.style.textDecoration = "line-through";
    
});
deletebtn.addEventListener("click", function(y) {
    tasktext.textContent = "";
});


// time to create cards , elements 
addbtn.addEventListener("click", function(z) {
let todoitem = document.createElement("li");
let circle = document.createElement("div");
let tasktext = document.createElement("span");
let deletebtn = document.createElement("button");

addbtn.appendChild(todoitem);
todoitem.appendChild(circle);
todoitem.appendChild(tasktext);
todoitem.appendChild(deletebtn);    
})