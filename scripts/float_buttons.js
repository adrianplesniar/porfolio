const buttonSection = document.querySelector(".float-button")

const buttonSectionOptions = {
  rootMargin: "-961px 0px 0px 0px"
};

const buttonSectionObserver = new IntersectionObserver(function(
  entries,
  buttonSectionObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      buttonSection.classList.add("floating");
    } else {
      buttonSection.classList.remove("floating");
    }
  });
},
buttonSectionOptions);

buttonSectionObserver.observe(buttonSection);