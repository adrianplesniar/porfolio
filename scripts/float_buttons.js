let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let portfolio = document.querySelector(".front-porfolio-wrapper");
let resume = document.querySelector(".porfolio-wrapper");

btn1.addEventListener("click", changeViewPorfolio);
btn2.addEventListener("click", changeViewResume);

function changeViewPorfolio() {
  if(resume.style.display == "none") {}
  else {
    btn1.classList.add("active-view");
    resume.style.display = "none";
    btn2.classList.remove("active-view");
    portfolio.style.display = "block";
  }
}

function changeViewResume() {
  if(portfolio.style.display == "none") {}
  else {
    btn2.classList.add("active-view");
    portfolio.style.display = "none";
    btn1.classList.remove("active-view");
    resume.style.display = "block";
  }
}