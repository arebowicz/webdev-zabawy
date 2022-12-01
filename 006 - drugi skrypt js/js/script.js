"use strict"

let list = [];

document.addEventListener('DOMContentLoaded', () => {
  let todoList = document.getElementById('todoList');
  let todoForm = document.getElementById('todoForm');
  let inputNameError = document.getElementById('inputNameError');
  let inputDescError = document.getElementById('inputDescError');
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoName = event.target.elements[0];
    let todoDesc = event.target.elements[1];
    if (todoName.value.length > 2 && todoDesc.value.length > 10) {
      let todoObj = {
        name: todoName.value,
        desc: todoDesc.value,
        done: false
      };
      for (let todo of list) {
        if (todo.name == todoObj.name && todo.desc == todoObj.desc) {
          return;
        }
      }
      list.push(todoObj);
      todoList.innerHTML = "";
      for (let todo of list) {
        let li = document.createElement('li');
        li.innerText = todo.name;
        todoList.appendChild(li);
      }
    } else {
      if (todoName.value.length <= 2) {
        todoName.classList.add('inputDanger');
        inputNameError.innerText = "za krótka nazwa";
      }
      if (todoDesc.value.length <= 10) {
        todoDesc.classList.add('inputDanger');
        inputDescError.innerText = "za krótki opis";
      }
    }
    if (todoName.value.length > 2) {
      todoName.classList.remove('inputDanger');
      inputNameError.innerText = "";
    }
    if (todoDesc.value.length > 10) {
      todoDesc.classList.remove('inputDanger');
      inputDescError.innerText = "";
    }
  });
});