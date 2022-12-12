document.addEventListener("DOMContentLoaded", () => {
  let showMoreText = document.querySelector(".show-more-action");
  let showMore = false;
  showMoreText.addEventListener("click", () => {
    if (!showMore) {
      showMoreText.innerHTML = `<h2>schowaj</h2>`;
      document.querySelector(".show-more .courier-box").style.display = "flex";
      showMore = true;
    } else {
      showMoreText.innerHTML = `<h2>pokaż więcej</h2>`;
      document.querySelector(".show-more .courier-box").style.display = "none";
      showMore = false;
    }
  });
  let printToggler = document.querySelector(".print-toggler");
  let printingOff = true;
  printToggler.addEventListener("click", () => {
    if (printingOff) {
      printToggler.children[0].style.display = "flex";
      printToggler.children[1].style.display = "none";
      printingOff = false;
    } else {
      printToggler.children[0].style.display = "none";
      printToggler.children[1].style.display = "flex";
      printingOff = true;
    }
  });
});