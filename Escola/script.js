document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('contrateBtn');
  var modal = document.getElementById('modalMensagem');
  var close = document.getElementById('closeModal');

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
  });

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
// Exemplo simples de alerta ao clicar no botão
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-button');
    if (button) {
      button.addEventListener('click', () => {
        alert('Obrigado por escolher a Ecomar! Em breve entraremos em contato.');
      });
    }
  });
  