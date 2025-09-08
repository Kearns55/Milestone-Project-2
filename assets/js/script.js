/* jshint esversion: 11 */

// Grab references to DOM elements
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
const endQuizElement = document.getElementById('end-quiz');
let colors = ["#169B62", "#FFFFFF", "#FF883E"];

let questions, shuffledQuestions, currentQuestionIndex;
let score = 0;
let maxQuestions = 10; // total questions per quiz

// Handle category selection
categoryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedCategory = event.target.dataset.category;

    // Load the correct question set based on chosen category
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

// Restart buttons just reload the page
restartButton.addEventListener('click', () => {
  window.location.reload();
});

newGameButton.addEventListener('click', () => {
  window.location.reload();
});

// Go to next question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// Start the quiz
function startGame() {
  score = 0;
  document.getElementById('category-select').classList.add('hide');
  document.getElementById('restart-btn').classList.remove('hide');
  document.getElementById('score').classList.remove('hide');
  heading.classList.add('hide');

  // Shuffle questions
  shuffledQuestions = shuffleArray([...questions]);
  currentQuestionIndex = 0;

  // Show first question
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

// Set up the next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Display a question and its answers
function showQuestion(question) {
  questionElement.innerHTML = `What is <span class="current-question">${question.question}</span> as Gaeilge?`;

  // Shuffle answers for randomness
  let shuffledAnswers = shuffleArray(question.answers);

  // Create answer buttons
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

/* Reset state before showing the next question */
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');

  // Remove old answer buttons
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Handle answer selection
function selectAnswer(e) {
  // Disable all answer buttons after selection
  Array.from(answerButtonsElement.children).forEach(button => button.classList.add('disable'));

  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  // Update score if correct
  if (correct) {
    score++;
    scoreElement.innerText = `Score: ${score}`;
  }

  // Apply correct/wrong styles
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  // Show next button or end quiz
  if (maxQuestions > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    endQuiz();
  }
}

// Show final results and run confetti
function endQuiz() {
  questionContainerElement.classList.add('hide');
  endQuizElement.classList.remove('hide');
  controls.classList.add('hide');
  scoreElement.classList.add('hide');
  document.getElementById('final-score').innerText = score;

  // 🎉 Confetti animation
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

    // Fire confetti from left & right
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: colors
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: colors
    });
  }, 250);

  // Display final score with special message for perfect score

  if (score === maxQuestions) {
    document.getElementById('score-heading').classList.add('hide');
    document.getElementById('perfect-score').classList.remove('hide');
  } else {
    document.getElementById('final-score').innerText = score;
  }
}

// Apply correct/wrong styling to element
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

// Remove correct/wrong classes
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// Shuffle helper (randomizes array order)
function shuffleArray(arrayToBeShuffled) {
  return arrayToBeShuffled.sort(() => Math.random() - 0.5);
}