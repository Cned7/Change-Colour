document.addEventListener("DOMContentLoaded", () => {
  const colourBox = document.getElementById("colour--box");
  const changeColourBtn = document.getElementById("change--colour--btn");

  function getRandomColor() {
    // Generate a random hexadecimal color
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  changeColourBtn.addEventListener("click", () => {
    colourBox.style.backgroundColor = getRandomColor();
  });
});
