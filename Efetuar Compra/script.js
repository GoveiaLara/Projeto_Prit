function voltar() {
    window.history.back();
  }
  
  document.getElementById("purchase-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
  });
  