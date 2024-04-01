AOS.init({ once: true });

document.querySelectorAll(".toggleHeader").forEach((item) => {
  item.addEventListener("click", () => {
    const offsetHeight =
      item.parentElement.querySelector(".toggleContent ul").offsetHeight;
    const tarEl = item.parentElement.querySelector(".toggleContent");

    const plusIcon = item.querySelector("#plusIcon");
    if (tarEl.classList.contains("active")) {
      tarEl.style.maxHeight = 0;
      plusIcon.classList.remove("active");
    } else {
      tarEl.style.maxHeight = offsetHeight + "px";
      plusIcon.classList.add("active");
    }
    tarEl.classList.toggle("active");
  });
});
const sidebar = document.querySelector(".sidebar");

const handleSideBar = () => {
  sidebar.classList.toggle("active");
  document.body.classList.toggle("active");
};
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav span");

const handleNavItem = (sectionId) => {
  navItems.forEach((navItem) => {
    if (navItem.innerHTML.toLowerCase() == sectionId?.toLowerCase()) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
};

const handleSectionScroll = (id) => {
  const targetElement = document.getElementById(id);
  targetElement.scrollIntoView({ behavior: "smooth" });
  handleNavItem(id);
  handleSideBar();
};

function checkCurrentSection() {
  const scrollPosition = window.scrollY;
  const offset = 50; // Adjust this value as needed

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    // Check if the section is partially in view
    if (rect.top - offset <= 0 && rect.bottom > offset) {
      return section.id;
    }
  }

  return null; // No section in view
}

const handleScroll = () => {
  const sectionId = checkCurrentSection();
  handleNavItem(sectionId);
  console.log(sectionId == "home");
  if (sectionId == "home") {
    header.classList.remove("fixedHeader");
  } else {
    header.classList.add("fixedHeader");
  }
};

window.addEventListener("scroll", handleScroll);
