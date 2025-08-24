const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
startButton.classList.add('hide'); 
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}

function setNextQuestion() {
resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
questionElement.innerText = question.question;
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
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
 const selectedButton = e.target;
 const correct = selectedButton.dataset.correct;
 setStatusClass(document.body, correct);
 Array.from(answerButtonsElement.children).forEach(button => {
   setStatusClass(button, button.dataset.correct);
 });
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

const questions =[
    {
        question: "What is 'dog' as gaeilge?",
        answers: [
            { text: "Madra", correct: true },
            { text: "Cat", correct: false },
            { text: "Capall", correct: false },
            { text: "Póca", correct: false }
        ]
    },
  {
    question: "What is 'cat' as Gaeilge?",
    answers: [
      { text: "Cat", correct: true },
      { text: "Madra", correct: false },
      { text: "Luch", correct: false },
      { text: "Frog", correct: false }
    ]
  },
  {
    question: "What is 'horse' as Gaeilge?",
    answers: [
      { text: "Capall", correct: true },
      { text: "Bó", correct: false },
      { text: "Leon", correct: false },
      { text: "Eilifint", correct: false }
    ]
  },
  {
    question: "What is 'cow' as Gaeilge?",
    answers: [
      { text: "Bó", correct: true },
      { text: "Muc", correct: false },
      { text: "Capall", correct: false },
      { text: "Madra", correct: false }
    ]
  },
  {
    question: "What is 'sheep' as Gaeilge?",
    answers: [
      { text: "Caora", correct: true },
      { text: "Coinín", correct: false },
      { text: "Gabhar", correct: false },
      { text: "Loscán", correct: false }
    ]
  },
  {
    question: "What is 'pig' as Gaeilge?",
    answers: [
      { text: "Muc", correct: true },
      { text: "Bó", correct: false },
      { text: "Luch", correct: false },
      { text: "Francach", correct: false }
    ]
  },
  {
    question: "What is 'goat' as Gaeilge?",
    answers: [
      { text: "Gabhar", correct: true },
      { text: "Caora", correct: false },
      { text: "Capall", correct: false },
      { text: "Tíogar", correct: false }
    ]
  },
  {
    question: "What is 'chicken' as Gaeilge?",
    answers: [
      { text: "Cearc", correct: true },
      { text: "Lacha", correct: false },
      { text: "Madra", correct: false },
      { text: "Éan", correct: false }
    ]
  },
  {
    question: "What is 'duck' as Gaeilge?",
    answers: [
      { text: "Lacha", correct: true },
      { text: "Cearc", correct: false },
      { text: "Rón", correct: false },
      { text: "Féileacán", correct: false }
    ]
  },
  {
    question: "What is 'rabbit' as Gaeilge?",
    answers: [
      { text: "Coinín", correct: true },
      { text: "Luch", correct: false },
      { text: "Caora", correct: false },
      { text: "Gabhar", correct: false }
    ]
  },
  {
    question: "What is 'fox' as Gaeilge?",
    answers: [
      { text: "Sionnach", correct: true },
      { text: "Fia", correct: false },
      { text: "Madra", correct: false },
      { text: "Bear", correct: false }
    ]
  },
  {
    question: "What is 'bear' as Gaeilge?",
    answers: [
      { text: "Béar", correct: true },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false },
      { text: "Eilifint", correct: false }
    ]
  },
  {
    question: "What is 'deer' as Gaeilge?",
    answers: [
      { text: "Fia", correct: true },
      { text: "Mac Tíre", correct: false },
      { text: "Féileacán", correct: false },
      { text: "Rón", correct: false }
    ]
  },
  {
    question: "What is 'wolf' as Gaeilge?",
    answers: [
      { text: "Mac Tíre", correct: true },
      { text: "Madra", correct: false },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false }
    ]
  },
  {
    question: "What is 'mouse' as Gaeilge?",
    answers: [
      { text: "Luch", correct: true },
      { text: "Francach", correct: false },
      { text: "Coinín", correct: false },
      { text: "Ant", correct: false }
    ]
  },
  {
    question: "What is 'rat' as Gaeilge?",
    answers: [
      { text: "Francach", correct: true },
      { text: "Luch", correct: false },
      { text: "Iasc", correct: false },
      { text: "Madra", correct: false }
    ]
  },
  {
    question: "What is 'snake' as Gaeilge?",
    answers: [
      { text: "Nathair", correct: true },
      { text: "Iasc", correct: false },
      { text: "Loscán", correct: false },
      { text: "Mac Tíre", correct: false }
    ]
  },
  {
    question: "What is 'fish' as Gaeilge?",
    answers: [
      { text: "Iasc", correct: true },
      { text: "Deilf", correct: false },
      { text: "Míol Mór", correct: false },
      { text: "Loscán", correct: false }
    ]
  },
  {
    question: "What is 'bird' as Gaeilge?",
    answers: [
      { text: "Éan", correct: true },
      { text: "Bee", correct: false },
      { text: "Ant", correct: false },
      { text: "Cat", correct: false }
    ]
  },
  {
    question: "What is 'frog' as Gaeilge?",
    answers: [
      { text: "Loscán", correct: true },
      { text: "Iasc", correct: false },
      { text: "Coinín", correct: false },
      { text: "Luch", correct: false }
    ]
  },
  {
    question: "What is 'butterfly' as Gaeilge?",
    answers: [
      { text: "Féileacán", correct: true },
      { text: "Bee", correct: false },
      { text: "Seangán", correct: false },
      { text: "Éan", correct: false }
    ]
  },
  {
    question: "What is 'bee' as Gaeilge?",
    answers: [
      { text: "Beacha", correct: true },
      { text: "Féileacán", correct: false },
      { text: "Ant", correct: false },
      { text: "Éan", correct: false }
    ]
  },
  {
    question: "What is 'ant' as Gaeilge?",
    answers: [
      { text: "Seangán", correct: true },
      { text: "Francach", correct: false },
      { text: "Luch", correct: false },
      { text: "Bee", correct: false }
    ]
  },
  {
    question: "What is 'lion' as Gaeilge?",
    answers: [
      { text: "Leon", correct: true },
      { text: "Tíogar", correct: false },
      { text: "Béar", correct: false },
      { text: "Mac Tíre", correct: false }
    ]
  },
  {
    question: "What is 'tiger' as Gaeilge?",
    answers: [
      { text: "Tíogar", correct: true },
      { text: "Leon", correct: false },
      { text: "Capall", correct: false },
      { text: "Gabhar", correct: false }
    ]
  },
  {
    question: "What is 'elephant' as Gaeilge?",
    answers: [
      { text: "Eilifint", correct: true },
      { text: "Míol Mór", correct: false },
      { text: "Deilf", correct: false },
      { text: "Rón", correct: false }
    ]
  },
  {
    question: "What is 'monkey' as Gaeilge?",
    answers: [
      { text: "Moncaí", correct: true },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false },
      { text: "Cat", correct: false }
    ]
  },
  {
    question: "What is 'whale' as Gaeilge?",
    answers: [
      { text: "Míol Mór", correct: true },
      { text: "Iasc", correct: false },
      { text: "Rón", correct: false },
      { text: "Deilf", correct: false }
    ]
  },
  {

    }

]