'use strict!';

// Add task btn 
const addBtn = document.getElementById("add");
// tasks array 
let tasks = [];
// input field 
const toDo = document.getElementById("to-do");

function addTask(){

  console.log('Task Added');

}


addBtn.addEventListener("click", function(){
  tasks.push(toDo.value);
  console.log(tasks);
});