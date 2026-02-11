document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const header = document.querySelector(".header");

  if (!toggle || !menu || !header) return;

  // Toggle hamburger
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Handle mobile menu section navigation (FIXES HEADER ISSUE)
  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      const headerHeight = header.offsetHeight;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      menu.classList.remove("open");
    });
  });

});
