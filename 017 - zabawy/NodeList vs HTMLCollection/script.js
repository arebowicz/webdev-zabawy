document.addEventListener("DOMContentLoaded", () => {
  let ul = document.querySelector("ul");
  let nodeList = document.querySelectorAll("li");
  let htmlCollection = document.getElementsByTagName("li");
  console.log(ul);
  console.log("nodeList -- " + nodeList.length + ":  ", nodeList);
  console.log("htmlCollection -- " + htmlCollection.length + ":  ", htmlCollection);
  let newLi = document.createElement("li");
  newLi.textContent = "tekst4";
  ul.appendChild(newLi);
  console.log(ul);
  console.log("nodeList -- " + nodeList.length + ":  ", nodeList);
  console.log("htmlCollection -- " + htmlCollection.length + ":  ", htmlCollection);
});