/* jshint esversion: 11 */

const heading = document.querySelector('.heading');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const newGameButton = document.getElementById('new-btn');
const controls = document.getElementById('controls');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const categoryButtons = document.querySelectorAll('.category-btn');
const scoreElement = document.getElementById('score');
const endQuizElement =document.getElementById('end-quiz');
let questions, shuffledQuestions, currentQuestionIndex;
let score = 0;
let maxQuestions = 3;

categoryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedCategory = event.target.dataset.category;

    if (selectedCategory === 'animals') {
      questions = animalQuestions;
    } else if (selectedCategory === 'fruits') {
      questions = fruitQuestions;
    } else if (selectedCategory === 'colours') {
      questions = colourQuestions;
    }

    startGame();
  });
});


restartButton.addEventListener('click', () => {
  window.location.reload();
});

newGameButton.addEventListener('click', () => {
  window.location.reload();
});

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});


function startGame() {
  score = 0;
  document.getElementById('category-select').classList.add('hide');
  document.getElementById('restart-btn').classList.remove('hide');
  document.getElementById('score').classList.remove('hide');
  heading.classList.add('hide');
//Question/answer shuffle
  shuffledQuestions = shuffleArray([...questions]);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerHTML = `What is <span class="current-question">${question.question}</span> as Gaeilge?`;
  let shuffledAnswers = shuffleArray(question.answers);
  shuffledAnswers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}


/* Reset the state of the quiz */
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  Array.from(answerButtonsElement.children).forEach(button => button.disabled = true);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
    if (correct) {
    score++;
    scoreElement.innerText = `Score: ${score}`;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (maxQuestions > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionContainerElement.classList.add('hide');
  endQuizElement.classList.remove('hide');
  controls.classList.add('hide');
  scoreElement.classList.add('hide');
  document.getElementById('final-score').innerText = score;

  // Trigger confetti animation
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    var particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}



function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }

}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


// Shuffle questions and answers
function shuffleArray(arrayToBeShuffled) {
  return arrayToBeShuffled.sort(() => Math.random() - 0.5);
}