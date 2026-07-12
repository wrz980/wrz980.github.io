// Shared site scripts

// Load a shared HTML fragment into a placeholder element
async function loadInclude(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    el.outerHTML = await res.text();
  } catch (err) {
    console.error(`Failed to load include ${url}:`, err);
  }
}

function initNav() {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Mark the current page in the nav
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = link.getAttribute("href").split("/").pop();
    if (target === here) {
      link.setAttribute("aria-current", "page");
    }
  });
}

// Load header and footer, then wire up the nav
Promise.all([
  loadInclude("#header-placeholder", "./includes/header.html"),
  loadInclude("#footer-placeholder", "./includes/footer.html"),
]).then(initNav);
