document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");

  if (!toggle || !menu) return;

  // Toggle menu
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Close menu when ANY link is clicked (including section links)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });

  // ALSO close menu when page scrolls (fixes section anchor bug)
  window.addEventListener("scroll", () => {
    menu.classList.remove("open");
  });
});

