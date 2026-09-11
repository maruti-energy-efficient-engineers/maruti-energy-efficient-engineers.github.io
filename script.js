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

// Hamburger Menu Logic
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

// NEW: Magazine feature lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const pressThumbs = document.querySelectorAll(".press-thumb");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

if (lightbox && lightboxImg && lightboxClose && pressThumbs.length) {
  pressThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const fullSrc = thumb.getAttribute("data-full");
      const altText = thumb.querySelector("img")?.alt || "Magazine feature";
      openLightbox(fullSrc, altText);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  // Close when clicking the dark background (not the image itself)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
