// product and cart variables
const openBtns = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".close-sidebar");
const sidebarDOM = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

const bodyDom = document.querySelector("body");

// display products
class UI {
  showSidebar() {
    sidebarOverlay.classList.add("showOverlay");
    sidebarDOM.classList.add("showSidebar");
    bodyDom.classList.add("body-sidebarOpen");
  }
  hideSidebar() {
    sidebarOverlay.classList.remove("showOverlay");
    sidebarDOM.classList.remove("showSidebar");
    bodyDom.classList.remove("body-sidebarOpen");
  }

  setupAPP() {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", this.showSidebar);
    });
    closeBtn.addEventListener("click", this.hideSidebar);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.setupAPP();
});
