document.addEventListener("DOMContentLoaded", () => {
  let form1 = document.querySelector("#form1");
  let form2 = document.querySelector("#form2");
  console.log(form1);
  console.log(form2);
  form2.addEventListener("submit", event => {
    event.preventDefault();
    // przygotowanie danych do wysyłki
  })
});