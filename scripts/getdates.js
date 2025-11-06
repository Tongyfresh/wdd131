document.addEventListener("DOMContentLoaded", function () {
  const currentYearSpan = document.getElementById("currentyear");
  currentYearSpan.textContent = new Date().getFullYear();

  const lastModifiedP = document.getElementById("lastModified");
  lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
});
