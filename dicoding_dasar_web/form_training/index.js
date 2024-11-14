document.addEventListener("submit", (event) => {
  const inputNama = document.getElementById("inputNama").value;
  console.log("input nama > ", inputNama);

  const inputDomisili = document.getElementById("inputAsal").value;
  console.log("input domisili >", inputDomisili);
  const message = `si ${inputNama} asalnya dari ${inputDomisili}`;

  document.getElementById("messageAfterSubmit").innerText = message;

  event.preventDefault();
});
