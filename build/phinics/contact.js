document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all required fields.";
    return;
  }

  // Simulate a form submission
  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  this.reset();
});
