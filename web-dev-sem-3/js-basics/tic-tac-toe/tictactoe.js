const boxes = document.querySelectorAll(".b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.textContent = "X";
  });

  box.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    box.textContent = "O";
  });
});
