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
