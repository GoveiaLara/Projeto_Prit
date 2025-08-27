function reservar() {
  alert("Reserva realizada com sucesso! Entraremos em contato por e-mail.");
}

document.getElementById("promoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const msg = document.getElementById("msg");

  if (email) {
    msg.textContent = "Obrigado! Você receberá nossas promoções em breve.";
    msg.classList.remove("hidden");
    document.getElementById("promoForm").reset();
  }
});
