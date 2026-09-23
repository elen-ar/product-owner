// ── Sidebar scroll spy ───────────────────────────────────────
const navLinks = document.querySelectorAll("#sb-nav a");
const sections = ["hero","cv","skills", "cases","contacts"];

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove("active"));
        const match = document.querySelector(`#sb-nav a[data-id="${entry.target.id}"]`);
        if (match) match.classList.add("active");
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});

// Default active
navLinks[0].classList.add("active");

// Smooth scroll for sidebar links
document.querySelectorAll("#sb-nav a, #mobile-drawer a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // close mobile drawer
    drawer.classList.remove("open");
    iconMenu.style.display = "block";
    iconClose.style.display = "none";
  });
});

// ── Mobile menu ──────────────────────────────────────────────
const toggle = document.getElementById("mob-toggle");
const drawer = document.getElementById("mobile-drawer");
const iconMenu = document.getElementById("mob-icon-menu");
const iconClose = document.getElementById("mob-icon-close");

toggle.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  iconMenu.style.display = open ? "none" : "block";
  iconClose.style.display = open ? "block" : "none";
});

// ── Contact form ─────────────────────────────────────────────
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("form-submit");
const success = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.style.display = "none";
  success.classList.add("show");
  form.reset();
  setTimeout(() => {
    success.classList.remove("show");
    submitBtn.style.display = "flex";
  }, 4000);
});
