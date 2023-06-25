let navItems = document.querySelectorAll(".nav-item");

const setActiveTab = (menuItem) => {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  menuItem.classList.add("active");
};

navItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveTab(menuItem);
  });
});
