'use strict';

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const clearAllLists = document.getElementById("clear");

const listsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if(listsFromLocalStorage) {
  myLeads = listsFromLocalStorage;
  render();
}


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  localStorage.setItem("myLeads" ,JSON.stringify(myLeads) );
  render();
})

function render() {
  let listItems = " ";
  // Render the leads in the unordered list using ulEl.textContent
  for (let i = 0; i < myLeads.length; i++) {
  listItems += `
      <div class="list-flex">
        <span class="dot"></span>
        <li> ${myLeads[i]} </li>
      </div>
      <hr>
    `; 
  }

  ulEl.innerHTML = listItems;
};

clearAllLists.addEventListener("click", function(){
  console.log("Cleared");
  localStorage.clear();
  myLeads = [];
  render();
});







