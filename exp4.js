let CharacterCount = 0;

const inputElement = document.getElementById("texts");

inputElement.oninput = function () {
  CharacterCount = this.value.length;
  document.getElementById("updateVal").innerText = CharacterCount;
};
