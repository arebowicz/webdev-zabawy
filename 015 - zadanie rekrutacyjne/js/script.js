document.addEventListener("DOMContentLoaded", () => {
  let showMoreText = document.querySelector(".show-more-action");
  let showBox = document.querySelector(".show-more .courier-box");
  showMoreText.addEventListener("click", () => {
    if (showMoreText.innerText === "pokaż więcej") {
      showMoreText.innerHTML = `<h2>schowaj</h2>`;
      showBox.style.display = "flex";
    } else if (showMoreText.innerText === "schowaj") {
      showMoreText.innerHTML = `<h2>pokaż więcej</h2>`;
      showBox.style.display = "none";
    }
  });
});