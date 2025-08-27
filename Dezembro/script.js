document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-button');
    if (button) {
      button.addEventListener('click', () => {
        alert('Sua reserva foi iniciada! Em breve entraremos em contato.');
      });
    }
  });
  