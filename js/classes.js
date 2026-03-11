(function () {
  async function loadComponent(el) {
    const path = el.getAttribute("data-component");
    if (!path) return;
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("Failed to load: " + path);
      const html = await res.text();
      el.outerHTML = html;
    } catch (err) {
      console.error(err);
      el.innerHTML = "<p style='color:red;'>Could not load: " + path + "</p>";
    }
  }

  function loadAll() {
    document.querySelectorAll("[data-component]").forEach(loadComponent);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAll);
  } else {
    loadAll();
  }
})();