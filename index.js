'use strict';

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  render();
})

function render() {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>" + "<hr>"; 
  }

  ulEl.innerHTML = listItems;
};
// Render the leads in the unordered list using ulEl.textContent



