const heading = document.querySelector('.heading');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const categoryButtons = document.querySelectorAll('.category-btn');
const scoreElement = document.getElementById('score');
let questions, shuffledQuestions, currentQuestionIndex;
let score = 0;

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
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
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
  question.answers.forEach(answer => {
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
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (currentQuestionIndex < 9) {
    nextButton.classList.remove('hide');
  }
  scoreElement.innerText = `Score: ${score}`;
  Array.from(answerButtonsElement.children).forEach(button => button.disabled = true);
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

function endQuiz() {
  document.getElementById('end-quiz').classList.remove('hide');
  document.getElementById('final-score').innerText = score;
}