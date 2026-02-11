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

// ===== FIX MOBILE SECTION SCROLL WITH FIXED HEADER =====
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const headerHeight = document.querySelector(".header").offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

    // Close menu after navigating
    const menu = document.querySelector(".mobile-menu");
    if (menu) menu.classList.remove("open");
  });
});
