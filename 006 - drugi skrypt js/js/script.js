"use strict"

let todoList;
let list;

document.addEventListener('DOMContentLoaded', () => {
  todoList = document.getElementById('todoList');
  let todoForm = document.getElementById('todoForm');
  let resetLocalStorage = document.getElementById('resetLocalStorage');
  let inputNameError = document.getElementById('inputNameError');
  let inputDescError = document.getElementById('inputDescError');
  getTodoList();
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoName = event.target.elements[0];
    let todoDesc = event.target.elements[1];
    if (todoName.value.length > 2 && todoDesc.value.length > 10) {
      let todoObj = {
        name: todoName.value,
        desc: todoDesc.value,
        done: false,
        dateStr: (new Date()).toLocaleString()
      };
      for (let todo of list) {
        if (todo.name === todoObj.name && todo.desc === todoObj.desc) {
          return;
        }
      }
      list.push(todoObj);
      localStorage.setItem('list', JSON.stringify(list));
      renderList();
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
    todoName.value = "";
    todoDesc.value = "";
  });
  resetLocalStorage.addEventListener("click", () => {
    localStorage.removeItem('list');
    list = [];
    renderList();
  });
});

const renderList = () => {
  let liList = Array.from(todoList.getElementsByTagName('li'));
  liList.forEach((li) => {
    let button = li.getElementsByTagName('button')[0];
    button.removeEventListener("click", changeTaskStatus);
  })
  todoList.innerHTML = "";
  list.forEach((todo, index) => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let heading = document.createElement('h3');
    let paragraph = document.createElement('p');
    let button = document.createElement('button');
    li.classList.add('todoList');
    button.classList.add('btn');
    button.addEventListener("click", changeTaskStatus);
    button.dataset.taskId = index;
    button.innerText = "done?";
    heading.innerText = todo.name + ' (' + todo.dateStr + ')';
    heading.style.color = "#0d518f";
    paragraph.innerText = todo.desc;
    if (todo.done) {
      heading.style.color = "rgba(255, 255, 255, 0.5)";
      paragraph.style.color = "rgba(255, 255, 255, 0.5)";
      paragraph.style.textDecoration = "line-through";
      button.innerText = "done!";
    }
    div.appendChild(heading);
    div.appendChild(paragraph);
    li.appendChild(button);
    li.appendChild(div);
    todoList.appendChild(li);
  });
};

const changeTaskStatus = (event) => {
  let todo = list[Math.round(event.target.dataset.taskId)];
  if (todo.done) {
    todo.done = false;
  } else {
    todo.done = true;
  }
  renderList();
  localStorage.setItem('list', JSON.stringify(list));
}

const getTodoList = () => {
  if (localStorage.getItem('list')) {
    list = JSON.parse(localStorage.getItem('list'));
    renderList();
  } else {
    list = [];
  }
}