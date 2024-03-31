AOS.init({ once: true });

document.querySelectorAll(".toggleContainer").forEach((item) => {
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
