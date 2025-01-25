document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");
  const modal = document.querySelector(".modal");
  const body = document.querySelector("body");
  const closeButton = document.querySelector(".modal__close");
  const focusableElements = modal.querySelectorAll("button, a, input, textarea");

  function openModal() {
    modal.classList.add("active");
    body.classList.add("modal-active");
    focusableElements.forEach(el => el.setAttribute("tabindex", "1"));
    document.querySelectorAll("button, a, input, textarea").forEach(el => {
      if (!modal.contains(el)) el.setAttribute("tabindex", "-1");
    });
    focusableElements[0].focus();
  }

  function closeModal() {
    modal.classList.remove("active");
    body.classList.remove("modal-active");
    document.querySelectorAll("button, a, input, textarea").forEach(el => el.removeAttribute("tabindex"));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    openModal();
  });

  closeButton.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) closeModal();
  });

  document.addEventListener("click", function (event) {
    if (modal.classList.contains("active") && !modal.contains(event.target) && !form.contains(event.target)) closeModal();
  });
});