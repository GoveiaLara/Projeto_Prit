document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("loginMessage");
  
    if (email && senha) {
      msg.textContent = "Login realizado com sucesso! ✅";
      msg.classList.remove("hidden");
      msg.style.color = "#ffc107";
      this.reset();
    } else {
      msg.textContent = "Preencha ambos os campos.";
      msg.classList.remove("hidden");
      msg.style.color = "#ff4444";
    }
  });
  