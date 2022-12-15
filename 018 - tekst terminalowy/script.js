document.addEventListener("DOMContentLoaded", () => {
  let txt = document.querySelector(".text-container").textContent.trim();
  let terminal = document.querySelector(".text-terminal");
  let i = 0, intervalId;
  intervalId = window.setInterval(() => {
    terminal.innerHTML += txt.charAt(i++);
    if (i > txt.length) {
      window.clearInterval(intervalId);
    }
  }, 10);
});