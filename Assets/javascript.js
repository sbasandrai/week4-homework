const startButton = document.getElementById("start-btn");
const bannerSection = document.getElementById("main-border");
const mainElement = document.getElementById("main");

const removeBanner = () => {
  bannerSection.remove();
};

const renderQuestion = () => {
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "What is 5 + 3?";

  const ul = document.createElement("ul");
  const div = document.createElement("div");
};

const handleStartButtonClick = () => {
  //remove banner section
  removeBanner();
};

startButton.addEventListener("click", handleStartButtonClick);
