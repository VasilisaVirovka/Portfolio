const termsBtn = document.querySelector(".terms-trigger");
const termsBox = document.querySelector(".terms-popover");

if (termsBtn && termsBox) {
  termsBtn.addEventListener("click", () => {
    const isOpen = termsBtn.getAttribute("aria-expanded") === "true";

    termsBtn.setAttribute("aria-expanded", String(!isOpen));
    termsBox.hidden = isOpen;
  });
}
