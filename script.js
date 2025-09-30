const form = document.getElementById("consultForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      statusMsg.textContent = "✅ Thank you! Your consultation request has been sent.";
      statusMsg.className = "status success";
      form.reset();
    } else {
      statusMsg.textContent = "⚠️ Oops! Something went wrong. Please try again.";
      statusMsg.className = "status error";
    }
  } catch (error) {
    statusMsg.textContent = "⚠️ Network error. Please check your connection.";
    statusMsg.className = "status error";
  }
});

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
