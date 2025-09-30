const form = document.getElementById("consultForm");
const messageDiv = document.getElementById("formMessage");

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
