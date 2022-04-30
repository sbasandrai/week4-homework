const startButton = document.getElementById("start-btn");
const bannerSection = document.getElementById("main-border");

const mainElement = document.getElementById("main");

let questionIndex = 0;

// const options = ["yes", "no", "maybe"];

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("mainn");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    // const getCat = function (obj) {};

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    } else if (questions[0].options[1] === "December 31st") {
      secondsLeft -= 30;
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  alert("GAME OVER");
  removeQuestion();
  document.getElementById("feedback-form").remove();

  //   timeEl.textContent = " ";
  //   var imgEl = document.createElement("img");
  //   imgEl.setAttribute("src", "images/image_1.jpg");
  //   mainEl.appendChild(imgEl);
}

const questions = [
  {
    text: "The day before yesterday I was 25. The next year I will be 28. This is true only one day in a year. What day is my Birthday? ",
    options: ["December 31st", "October 12th", "April 10th"],
  },

  {
    text: "If the 3rd of March is a Tuesday, what day of the week is the 1st of July",
    options: ["Monday", "Wednesday", "Friday"],
  },

  {
    text: "How many sides does an octagon have?",
    options: ["Six", "Seven", "Eight"],
  },

  {
    text: "Which of these is a famous mathematician?",
    options: ["Pythagoras", "Marie Curie", "George Washington"],
  },

  {
    text: "What is the square root of 64?",
    options: ["Four", "Three", "Eight"],
  },
];

function handleOptionClick(event) {
  const currenttarget = event.currentTarget;
  const target = event.target;

  if (target.tagName === "LI") {
    const value = target.getAttribute("data-value");

    console.log(value);

    const question = questions[questionIndex].text;

    console.log(question);

    const answer = { question, value };

    // store answer in local storage
    storeInLS("feedbackResults", answer);

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
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  // get full name from input
  const fullName = document.getElementById("full-name").value;

  // validate
  if (fullName) {
    // if valid then store feedbackResults in LS
    const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));

    // build object with fullName and results
    const result = {
      fullName,
      feedbackResults,
    };

    // push the results back to LS
    storeInLS("allResults", result);

    // clear feedbackResults
    localStorage.removeItem("feedbackResults");

    // remove form
    document.getElementById("feedback-form").remove();

    scoretable();
  } else {
    alert("Please enter full name!");
  }
};

const renderResults = () => {
  console.log("render results");
};

const scoretable = () => {
  const table = document.createElement("table");
  const h2 = document.createElement("h2");
  h2.textContent = "Top Scores";
};

const renderForm = () => {
  console.log("render form");
  const section = document.createElement("section");
  section.setAttribute("class", "feedback-form-section");
  section.setAttribute("id", "feedback-form");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Submit your feedback";

  const form = document.createElement("form");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "form-control");

  const input = document.createElement("input");
  input.setAttribute("id", "full-name");
  input.setAttribute("class", "form-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter full name");

  inputDiv.append(input);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "form-control");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn");
  button.textContent = "Submit";

  buttonDiv.append(button);

  form.append(inputDiv, buttonDiv);

  section.append(h2, form);

  mainElement.append(section);

  // add event listener for form submission
  form.addEventListener("submit", handleFormSubmit);
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

const initialiseLocalStorage = () => {
  // get feedbackResults from LS
  const feedbackResultsFromLS = JSON.parse(
    localStorage.getItem("feedbackResults")
  );

  const allResultsFromLS = JSON.parse(localStorage.getItem("allResults"));

  if (!feedbackResultsFromLS) {
    // if not exist set LS to have feedbackResults as an empty array
    localStorage.setItem("feedbackResults", JSON.stringify([]));
  }

  if (!allResultsFromLS) {
    // if not exist set LS to have feedbackResults as an empty array
    localStorage.setItem("allResults", JSON.stringify([]));
  }
};

const storeInLS = (key, value) => {
  // get feedbackResults from LS
  const arrayFromLS = JSON.parse(localStorage.getItem(key));

  // push answer in to array
  arrayFromLS.push(value);

  // set feedbackResults in LS
  localStorage.setItem(key, JSON.stringify(arrayFromLS));
};

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
  setTime();
};

startButton.addEventListener("click", handleStartButtonClick);
