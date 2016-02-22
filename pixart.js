  var colorField = document.getElementById("color-field");
  var setColor = document.getElementById("set-color");

  var brushColor = document.querySelector(".brush");


  // store text input in a var and use it to manipulate square(brush) color when set-color button is clicked.
  setColor.addEventListener('onClick', userColor); // throws errors on '.' in console

// perfom function when button is clicked
  setColor.addEventListener('keydown', userColor);

// function to set brush color to user input
  function userColor() {
    e.preventDefault();
    brushColor.style.backgroundColor = colorField.value;
}
console.log('brushColor.backgroundColor');

//create 20 square divs
for (var i = 0; i<20; i++) {
  divSquare = document.createElement('div');
  divSquare.className = "square";
  $("body").append(divSquare);
  divSquare.addEventListener("onClick", function{
    this.style.backgroundColor = "green";
  })
}
