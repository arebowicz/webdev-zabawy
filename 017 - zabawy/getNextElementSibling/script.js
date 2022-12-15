// własna implementacja właściwości nextElementSibling
// zakładam, że mam do dyspozycji jedynie nextSibling

document.addEventListener("DOMContentLoaded", () => {
  // returns: nextElementSibling or null
  function getNextElementSibling(element) {
    if (element == null) {
      return null;
    }
    let next = element.nextSibling;
    while (next != null && next.nodeType != 1) {
      next = next.nextSibling;
    }
    return next;
  }

  // tests
  let element = document.querySelector("li");
  console.log(element, "\nis the same: ", getNextElementSibling(element) == element.nextElementSibling);
  element = getNextElementSibling(element);
  console.log(element, "\nis the same: ", getNextElementSibling(element) == element.nextElementSibling);
  element = getNextElementSibling(element);
  console.log(element, "\nis the same: ", getNextElementSibling(element) == element.nextElementSibling);
  element = getNextElementSibling(element);
  console.log(element);
  element = getNextElementSibling(element);
  console.log(element);
  element = getNextElementSibling(element);
});