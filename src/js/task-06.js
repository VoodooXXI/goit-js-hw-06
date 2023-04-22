const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  const inputLength = inputRef.value.length;
  const validLength = Number(inputRef.dataset.length);

  if (inputLength === validLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
