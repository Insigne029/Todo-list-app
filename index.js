// navigation control
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const assets = navLinks.classList;

  if (assets.contains("show-links")) {
    assets.remove("show-links");
  } else {
    assets.add("show-links");
  }
});

// overlay modal control

const overlayAddBtn = document.querySelector(".add-btn");
const overlayCloseBtn = document.querySelector(".close-overlay");
const overlayCancelBtn = document.querySelector(".cancel-btn");
const overlay = document.querySelector(".overlay");

overlayAddBtn.addEventListener("click", () => {
  const opener = overlay.classList;
  opener.add("open-overlay");
});

overlayCloseBtn.addEventListener("click", () => {
  const opener = overlay.classList;
  opener.remove("open-overlay");
});

overlayCancelBtn.addEventListener("click", () => {
  const opener = overlay.classList;
  opener.remove("open-overlay");
});
