const HomeBtn = document.querySelector(".HomeBtn");
const favoriteBtn = document.querySelector(".favoriteBtn");
const studyBtn = document.querySelector(".studyBtn");
const contactBtn = document.querySelector(".contactBtn");


const Home = document.querySelector(".Home");
const favorite = document.querySelector(".favorite");
const study = document.querySelector(".study");
const contact = document.querySelector(".contact");


HomeBtn.addEventListener("click", () => {
Home.style.display="block"
favorite.style.display = "none";
study.style.display = "none";
contact.style.display = "none";

});
favoriteBtn.addEventListener("click", () => {
  Home.style.display = "none";
  favorite.style.display = "block";
  study.style.display = "none";
  contact.style.display = "none";
});
studyBtn.addEventListener("click", () => {
  Home.style.display = "none";
  favorite.style.display = "none";
  study.style.display = "block";
  contact.style.display = "none";
});

contactBtn.addEventListener("click", () => {
  Home.style.display = "none";
  favorite.style.display = "none";
  study.style.display = "none";
  contact.style.display = "block";
});

