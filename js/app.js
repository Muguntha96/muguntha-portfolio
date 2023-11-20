document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#sidemenu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const yOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    });
  });
});