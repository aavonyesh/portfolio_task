const menuBtn = document.getElementById("menu_btn");
const cancelBtn = document.getElementById("cancel_btn");
const sidebar = document.getElementById("sidebar");


cancelBtn.style.opacity = "0";
cancelBtn.style.pointerEvents = "none";
menuBtn.style.display = "block";
sidebar.style.right = "-250px";

menuBtn.addEventListener("click", () => {
  sidebar.style.right = "0";
  menuBtn.style.display = "none";

  cancelBtn.style.transition = "opacity 0.4s ease";
  setTimeout(() => {
    cancelBtn.style.opacity = "1";
    cancelBtn.style.pointerEvents = "auto";
  }, 100);
});

cancelBtn.addEventListener("click", () => {
  sidebar.style.right = "-250px";

  cancelBtn.style.opacity = "0";
  cancelBtn.style.pointerEvents = "none";

  menuBtn.style.display = "block";
});
