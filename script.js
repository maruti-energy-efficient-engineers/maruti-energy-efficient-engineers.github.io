const form = document.getElementById("consultForm");
const messageDiv = document.getElementById("formMessage");

// NEW: Hamburger Menu Logic
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  // Toggle menu visibility when the hamburger icon is clicked
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close the menu when a link is clicked (for better mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    messageDiv.textContent = "✅ Thank you! Your consultation request has been sent.";
    messageDiv.style.color = "green";
    form.reset();
  } else {
    messageDiv.textContent = "⚠️ Oops! Something went wrong. Please try again.";
    messageDiv.style.color = "red";
  }
});
