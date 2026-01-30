const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = this.querySelector('input[type="text"]');
  const emailInput = this.querySelector('input[type="email"]');
  const messageInput = this.querySelector("textarea");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  alert(
    `Terima kasih ${name}! Pesan Anda telah terkirim.\n\nEmail: ${email}\nPesan: ${message}`,
  );

  this.reset();
});
