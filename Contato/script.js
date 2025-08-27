document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const feedback = document.getElementById("mensagem-sucesso");
  
    if (nome && email && celular && mensagem) {
      feedback.textContent = "Mensagem enviada com sucesso! 📬";
      feedback.classList.remove("hidden");
      feedback.style.color = "#ffc107";
  
      // Limpa os campos
      this.reset();
    } else {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.classList.remove("hidden");
      feedback.style.color = "#ff4444";
    }
  });
  