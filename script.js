// Set current year safely
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // 🔥 Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !menuButton.contains(e.target) &&
      !navLinks.contains(e.target)
    ) {
      navLinks.classList.remove("open");
    }
  });
}
