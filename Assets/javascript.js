const startButton = document.getElementById("start-btn");
const bannerSection = document.getElementById("main-border");

let questionIndex = 0;

const options = ["yes", "no", "maybe"];

const questions = [
  { text: "Question 1", options: ["yes", "no", "maybe"] },

  { text: "Question 2", options: ["yes", "no", "maybe"] },

  { text: "Question 3", options: ["yes", "no", "maybe"] },

  { text: "Question 4", options: ["yes", "no", "maybe"] },
];

const handleOptionClick = (event) => {
  const currenttarget = event.currentTarget;
  const target = event.target;

  if (target.tagName === "LI") {
    const value = target.getAttribute("data-value");

    console.log(value);

    const question = questions[questionIndex].text;

    console.log(question);

    const answer = { question, value };

    // store answer in local storage
    storeAnswerInLS();

    // go to next question if not last question
    removeQuestion();

    if (questionIndex < questions.length - 1) {
      // go to next quesetion if not the last question
      // increment question index by 1

      questionIndex += 1;

      renderQuestion();
    } else {
      // if last question, then render results
      // remove last question
      renderResults();

      renderForm();
    }
  }
};

const renderResults = () => {
  console.log("render results");
};

const renderForm = () => {
  console.log("render form");
};

const renderQuestion = () => {
  const currentQuestion = questions[questionIndex];

  const mainElement = document.getElementById("main");
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");
  section.setAttribute("id", "question-container");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = currentQuestion.text;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.setAttribute("data-value", currentQuestion.options[0]);
  li1.textContent = currentQuestion.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.setAttribute("data-value", currentQuestion.options[1]);
  li2.textContent = currentQuestion.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.setAttribute("data-value", currentQuestion.options[2]);
  li3.textContent = currentQuestion.options[2];

  ul.append(li1, li2, li3);
  section.append(h2, ul);
  mainElement.append(section);

  section.addEventListener("click", handleOptionClick);

  //   const div = document.createElement("div");
  //   div.setAttribute("class", "btn-control");

  //   const button = document.createElement("button");
  //   button.setAttribute("class", "btn");
};

const removeQuestion = () => {
  console.log("remove question");
  document.getElementById("question-container").remove();
};

// get feedback from LS

const storeAnswerInLS = (answer) => {
  const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));
};

feedbackResults.push(answer);

localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
const initialiseLocalStorage = () => {};

const feedbackResultsFromLS = JSON.parse(
  localStorage.getItem("feedbackResults")
);
localStorage.getItem("feedbackResults");

// if it already exists, then do nothing

if (!feedbackResultsFromLS) {
  localStorage.setItem(JSON.stringify([]));
}
// else set LS to have feedbackresults as an empty array

const removeBanner = () => {
  bannerSection.remove();
};

const handleStartButtonClick = () => {
  //starts local storage
  initialiseLocalStorage();

  //remove banner section
  removeBanner();
  renderQuestion();
};

startButton.addEventListener("click", handleStartButtonClick);
