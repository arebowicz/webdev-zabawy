// wersja 2.0 -- "dynamiczna" walidacja danych
// zakładam, że formularz wysłany będzie poprzez JS'a (o ile jest to w ogóle możliwe)
// a więc strona nie zostanie przeładowana
// dlatego też dane formularza są po submicie czyszczone i wszystkie flagi "wasClicked" ustawiane na false
// ponadto, zdarzenie "blur" pozwala zaświetlić pole do wprowadzenia danych gdy
// użytkownik "rozmyśli się" i nie wpisze nic - a tego wymagamy...
// ps wiem, powinienem był opakować to w mniejsze funkcje...
document.addEventListener("DOMContentLoaded", () => {
  let form1 = document.querySelector("#form1");
  let form2 = document.querySelector("#form2");
  let validationList = {
    yes :  {  isSet : false,  wasClicked : false  },
    no :  {  isSet : false,  wasClicked : false  },
    firstname :  {  isSet : false,  wasClicked : false  },
    surname :  {  isSet : false,  wasClicked : false  },
    email :  {  isSet : false,  wasClicked : false  }
  };
  form1.querySelector(":scope #yes").addEventListener("change", () => {
    validationList.yes.wasClicked = true;
    validationList.yes.isSet = true;
    validationList.no.isSet = false;
    form1.querySelector(":scope #our-page-field").classList.remove("wrong-input");
  });
  form1.querySelector(":scope #no").addEventListener("change", () => {
    validationList.no.wasClicked = true;
    validationList.no.isSet = true;
    validationList.yes.isSet = false;
    form1.querySelector(":scope #our-page-field").classList.remove("wrong-input");
  });
  form1.querySelector(":scope #firstname").addEventListener("input", event => {
    validationList.firstname.isSet = true;
    validationList.firstname.wasClicked = true;
    form1.querySelector(":scope #firstname").classList.remove("wrong-input");
    if (event.target.value === "") {
      validationList.firstname.isSet = false;
      form1.querySelector(":scope #firstname").classList.add("wrong-input");
    }
  });
  form1.querySelector(":scope #firstname").addEventListener("blur", () => {
    if (!validationList.firstname.wasClicked) {
      form1.querySelector(":scope #firstname").classList.add("wrong-input");
      validationList.firstname.wasClicked = true;
    }
  });
  form1.querySelector(":scope #surname").addEventListener("input", event => {
    validationList.surname.isSet = true;
    validationList.surname.wasClicked = true;
    form1.querySelector(":scope #surname").classList.remove("wrong-input");
    if (event.target.value === "") {
      validationList.surname.isSet = false;
      form1.querySelector(":scope #surname").classList.add("wrong-input");
    }
  });
  form1.querySelector(":scope #surname").addEventListener("blur", () => {
    if (!validationList.surname.wasClicked) {
      form1.querySelector(":scope #surname").classList.add("wrong-input");
      validationList.surname.wasClicked = true;
    }
  });
  form2.querySelector(":scope #email").addEventListener("input", event => {
    validationList.email.isSet = true;
    validationList.email.wasClicked = true;
    form2.querySelector(":scope #email").classList.remove("wrong-input");
    if (event.target.value === "") {
      validationList.email.isSet = false;
      form2.querySelector(":scope #email").classList.add("wrong-input");
    }
  });
  form2.querySelector(":scope #email").addEventListener("blur", () => {
    if (!validationList.email.wasClicked) {
      form2.querySelector(":scope #email").classList.add("wrong-input");
      validationList.email.wasClicked = true;
    }
  });
  form2.addEventListener("submit", event => {
    event.preventDefault();
    let isFormOk = false;
    let yesOrNo = false;
    if (validationList.yes.isSet == true || validationList.no.isSet == true) {
      yesOrNo = true;
    } else {
      form1.querySelector(":scope #our-page-field").classList.add("wrong-input");
    }
    if (yesOrNo && validationList.firstname.isSet
        && validationList.surname.isSet
        && validationList.email.isSet) {
      isFormOk = true;
    }
    if (isFormOk) {
      for (let key in validationList) {
        validationList[key].isSet = false;
        validationList[key].wasClicked = false;
      }
      form1.querySelector(":scope #yes").checked = false;
      form1.querySelector(":scope #no").checked = false;
      form1.querySelector(":scope #firstname").value = "";
      form1.querySelector(":scope #surname").value = "";
      form2.querySelector(":scope #email").value = "";
    } else {
      if (!validationList.firstname.isSet) {
        form1.querySelector(":scope #firstname").classList.add("wrong-input");
      }
      if (!validationList.surname.isSet) {
        form1.querySelector(":scope #surname").classList.add("wrong-input");
      }
      if (!validationList.email.isSet) {
        form2.querySelector(":scope #email").classList.add("wrong-input");
      }
    }
  });
});

// wersja 1.0 -- banalna walidacja danych
// 
// document.addEventListener("DOMContentLoaded", () => {
//   let form1 = document.querySelector("#form1");
//   let form2 = document.querySelector("#form2");
//   form2.addEventListener("submit", event => {
//     event.preventDefault();
//     // przygotowanie danych do wysyłki
//     let isSomeInputWrong = false;
//     // uważaj! :scope nie jest obsługiwane przez starsze przeglądarki + każdy IE
//     if (!form1.querySelector(":scope #yes").checked && !form1.querySelector(":scope #no").checked) {
//       form1.querySelector(":scope #our-page-field").classList.add("wrong-input");
//       isSomeInputWrong = true;
//     } else {
//       form1.querySelector(":scope #our-page-field").classList.remove("wrong-input");
//     }
//     if (form1.querySelector(":scope #firstname").value === "") {
//       form1.querySelector(":scope #firstname").classList.add("wrong-input");
//       isSomeInputWrong = true;
//     } else { 
//       form1.querySelector(":scope #firstname").classList.remove("wrong-input");
//     }
//     if (form1.querySelector(":scope #surname").value === "") {
//       form1.querySelector(":scope #surname").classList.add("wrong-input");
//       isSomeInputWrong = true;
//     } else { 
//       form1.querySelector(":scope #surname").classList.remove("wrong-input");
//     }
//     if (form2.querySelector(":scope #email").value === "") {
//       form2.querySelector(":scope #email").classList.add("wrong-input");
//       isSomeInputWrong = true;
//     } else {
//       form2.querySelector(":scope #email").classList.remove("wrong-input");
//     }
//     // wysyłka danych i czyszczenie formularza (o ile serwer odebrał poprawny formularz w całości!)
//     if (!isSomeInputWrong) {
//       console.log(isSomeInputWrong);
//       form1.querySelector(":scope #yes").checked = false;
//       form1.querySelector(":scope #no").checked = false;
//       form1.querySelector(":scope #firstname").value = "";
//       form1.querySelector(":scope #surname").value = "";
//       form2.querySelector(":scope #email").value = "";
//     }
//   });
// });