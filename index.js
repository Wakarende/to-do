'use strict!';

// Add task btn 
const addBtn = document.getElementById("add");
// tasks array 
let tasks = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// input field 
const toDo = document.getElementById("to-do");

function addTask(){

  console.log('Task Added');

}

// When add button is clicked it renders out the tasks.
addBtn.addEventListener("click", function(){
  tasks.push(toDo.value);
  console.log(tasks);
});


//For loop to log out items in the tasks array 
for(let i = 0; i < tasks.length; i++){
  console.log(tasks[i]);
}