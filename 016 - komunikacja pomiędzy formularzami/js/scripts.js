document.addEventListener("DOMContentLoaded", () => {
  let form1 = document.querySelector("#form1");
  let form2 = document.querySelector("#form2");
  form2.addEventListener("submit", event => {
    event.preventDefault();
    // przygotowanie danych do wysyłki
    let isSomeInputWrong = false;
    // uważaj! :scope nie jest obsługiwane przez starsze przeglądarki + każdy IE
    if (!form1.querySelector(":scope #yes").checked && !form1.querySelector(":scope #no").checked) {
      form1.querySelector(":scope #our-page-field").classList.add("wrong-input");
      isSomeInputWrong = true;
    } else {
      form1.querySelector(":scope #our-page-field").classList.remove("wrong-input");
    }
    if (form1.querySelector(":scope #firstname").value === "") {
      form1.querySelector(":scope #firstname").classList.add("wrong-input");
      isSomeInputWrong = true;
    } else { 
      form1.querySelector(":scope #firstname").classList.remove("wrong-input");
    }
    if (form1.querySelector(":scope #surname").value === "") {
      form1.querySelector(":scope #surname").classList.add("wrong-input");
      isSomeInputWrong = true;
    } else { 
      form1.querySelector(":scope #surname").classList.remove("wrong-input");
    }
    if (form2.querySelector(":scope #email").value === "") {
      form2.querySelector(":scope #email").classList.add("wrong-input");
      isSomeInputWrong = true;
    } else {
      form2.querySelector(":scope #email").classList.remove("wrong-input");
    }
    // wysyłka danych i czyszczenie formularza (o ile serwer odebrał poprawny formularz w całości!)
    if (!isSomeInputWrong) {
      console.log(isSomeInputWrong);
      form1.querySelector(":scope #yes").checked = false;
      form1.querySelector(":scope #no").checked = false;
      form1.querySelector(":scope #firstname").value = "";
      form1.querySelector(":scope #surname").value = "";
      form2.querySelector(":scope #email").value = "";
    }
  });
});