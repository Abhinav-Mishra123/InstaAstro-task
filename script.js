function handleClick() {
  var randomNum = Math.floor(Math.random() * 100 + 1);

  var element = document.getElementById("ranNum");
  element.innerHTML = randomNum;
}
