document.getElementById("btnReserva").addEventListener("click", function () {
    const msg = document.getElementById("mensagem");
    msg.textContent = "Reserva iniciada! 🌊 Em breve entraremos em contato.";
    msg.classList.remove("hidden");
    msg.style.color = "#0d47a1";
  });
  