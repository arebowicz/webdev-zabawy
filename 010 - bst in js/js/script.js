"use strict"

const bst = {
  value: null,
  lchild: null,
  rchild: null,
  depth: null
};
let maxdepth = 0;

document.addEventListener('DOMContentLoaded', () => {
  let bstform = document.getElementById('bstform');
  let bstout = document.getElementById('bstout');
  bstform.addEventListener('submit', (event) => {
    event.preventDefault();
    let value = event.target.elements[0].value;
    event.target.elements[0].value = "";
    console.log(value);
    if (addValue(bst, value)) {
      bstout.innerHTML = "";
      renderbst(bstout);
    }
    console.log(bst);
  });
});

function addValue(bst, value) {
  if (bst.value == null) {
    bst.value = value;
    bst.depth = 1;
    maxdepth = bst.depth;
    return true;
  } else if (bst.value == value) {
    return false;
  } else if (bst.value < value) {
    if (bst.rchild != null) {
      return addValue(bst.rchild, value)
    } else {
      bst.rchild = {
        value: value,
        lchild: null,
        rchild: null,
        depth: bst.depth+1
      }
      maxdepth = (maxdepth < bst.depth+1) ? bst.depth+1 : maxdepth;
      return true;
    }
  } else {
    if (bst.lchild != null) {
      return addValue(bst.lchild, value)
    } else {
      bst.lchild = {
        value: value,
        lchild: null,
        rchild: null,
        depth: bst.depth+1
      }
      maxdepth = (maxdepth < bst.depth+1) ? bst.depth+1 : maxdepth;
      return true;
    }
  }
}

function renderbst(bstout) {
  if (maxdepth == 1) {
    bstout.innerHTML = `${bst.value}`;
    return;
  }
  createlist();
  console.log(list);
  let index = 0, j = 0;
  for (let i=0; i<maxdepth; ++i) {
    while (j < Math.pow(2, i)) {
      if (j != 0) {
        bstout.insertAdjacentHTML('beforeend', "&nbsp;".repeat(2));
      }
      bstout.insertAdjacentHTML('beforeend', "&nbsp;".repeat(Math.pow(2, maxdepth-i) - 2));
      if (list[index+j] != null) {
        bstout.insertAdjacentHTML('beforeend', `${list[index+j].value}`);
      } else {
        bstout.insertAdjacentHTML('beforeend', "&nbsp;".repeat(2));
      }
      if (j != (Math.pow(2, i) - 1)) {
        bstout.insertAdjacentHTML('beforeend', "&nbsp;".repeat(Math.pow(2, maxdepth-i) - 2));
      }
      ++j;
    }
    index += j;
    j = 0;
    if (i != (maxdepth - 1)) {
      bstout.insertAdjacentHTML('beforeend', "<br />");
    }
  }
}

let list;

function createlist() {
  list = [];
  list.push(bst);
  if(maxdepth == 1) {
    return;
  }
  let index = 0;
  while (index < (Math.pow(2, maxdepth-1) - 1)) {
    if (list[index] != null) {
      list.push(list[index].lchild);
      list.push(list[index].rchild);
    } else {
      list.push(null);
      list.push(null);
    }
    ++index;
  }
  return;
}