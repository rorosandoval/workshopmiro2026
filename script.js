document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );

  const tabBtns = document.querySelectorAll(".tabs__btn");
  const days = document.querySelectorAll(".schedule__day");

  function setActiveDay(id) {
    tabBtns.forEach((b) => {
      const on = b.dataset.target === id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    days.forEach((d) => {
      const on = d.id === id;
      d.classList.toggle("is-active", on);
      d.querySelector(".day__toggle")?.setAttribute("aria-expanded", on);
    });
  }

  tabBtns.forEach((btn) =>
    btn.addEventListener("click", () => setActiveDay(btn.dataset.target)),
  );

  days.forEach((day) => {
    const header = day.querySelector(".day__toggle");
    header?.addEventListener("click", () => {
      if (day.classList.contains("is-active")) {
        day.classList.remove("is-active");
        header.setAttribute("aria-expanded", "false");
      } else {
        setActiveDay(day.id);
      }
    });
  });

  const navbar = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      navbar.style.boxShadow =
        window.scrollY > 10 ? "0 2px 10px rgba(0,0,0,.25)" : "none";
    },
    { passive: true },
  );
});
