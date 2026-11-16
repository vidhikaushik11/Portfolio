// Responsive navigation, active section highlighting and footer year.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    navItems.forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(link => link.classList.toggle(
            "active", link.getAttribute("href") === "#" + entry.target.id
          ));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
  }
});
const resumeDialog = document.getElementById("resumeDialog");

document.getElementById("requestResumeBtn")
    ?.addEventListener("click", () => {
        resumeDialog.showModal();
    });

document.getElementById("closeResumeDialog")
    ?.addEventListener("click", () => {
        resumeDialog.close();
    });

resumeDialog?.addEventListener("click", (event) => {
    if (event.target === resumeDialog) {
        resumeDialog.close();
    }
});
