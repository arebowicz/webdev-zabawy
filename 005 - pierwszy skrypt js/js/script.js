let ul;
let newItemForm;
let inputError;

document.addEventListener('DOMContentLoaded', () => {
  ul = document.getElementById('shoppingList');
  inputError = document.getElementById('inputError');
  newItemForm = document.getElementById('newItemForm');
  newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(event.target.elements[0].value.length > 2) {
      addListItem(event.target.elements[0].value);
      event.target.elements[0].classList.remove('inputDanger');
      inputError.innerText = "";
    } else {
      inputError.innerText = "zle dane wejsciowe";
      event.target.elements[0].classList.add('inputDanger');
    }
  });
});

function addListItem(shoppingItem) {
  let li = document.createElement('li');
  li.innerText = shoppingItem;
  ul.appendChild(li);
};