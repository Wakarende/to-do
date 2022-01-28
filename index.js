'use strict';

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let listsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(listsFromLocalStorage);

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
      <span></span>
      <li> ${myLeads[i]} </li>
    `; 
  }

  ulEl.innerHTML = listItems;
};



