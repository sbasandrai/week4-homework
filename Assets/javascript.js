const startButton = document.getElementById("start-btn");
const bannerSection = document.getElementById("main-border");

const renderQuestion2 = () => {
  const mainElement = document.getElementById("main");
  const sectionElement = document.createElement("section");
  sectionElement.setAttribute("class", "content-section question-container");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = "What is 5 + 3?";

  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.textContent = "9";

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.textContent = "8";

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.textContent = "32";

  ul.append(li1, li2, li3);
  sectionElement.append(h2, ul);
  mainElement.append(sectionElement);

  //   const div = document.createElement("div");
  //   div.setAttribute("class", "btn-control");

  //   const button = document.createElement("button");
  //   button.setAttribute("class", "btn");
};

const removeBanner = () => {
  bannerSection.remove();
};

const handleStartButtonClick = () => {
  //remove banner section
  removeBanner();
  renderQuestion2();
};

startButton.addEventListener("click", handleStartButtonClick);
