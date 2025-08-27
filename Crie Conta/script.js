document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const msg = document.getElementById("cadastroMessage");
  
    if (!nome || !email || !cpf || !nascimento || !senha || !confirmarSenha) {
      msg.textContent = "Preencha todos os campos corretamente.";
      msg.style.color = "#ff4444";
    } else if (senha !== confirmarSenha) {
      msg.textContent = "As senhas não coincidem.";
      msg.style.color = "#ff4444";
    } else {
      msg.textContent = "Cadastro realizado com sucesso! ✅";
      msg.style.color = "#ffc107";
      this.reset();
    }
  
    msg.classList.remove("hidden");
  });
  