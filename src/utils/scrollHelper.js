export const scrollToSection = (sectionId, closeMenuCallback) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (closeMenuCallback) closeMenuCallback(false);
  }
};
