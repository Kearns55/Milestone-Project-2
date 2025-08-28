const startButton = document.getElementById('start-btn');
const heading = document.querySelector('.heading');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const categoryButtons = document.querySelectorAll('.category-btn');



let shuffledQuestions, currentQuestionIndex;



const animalQuestions = [{
    question: "What is 'dog' as Gaeilge?",
    answers: shuffle([{
        text: "Madra",
        correct: true
      },
      {
        text: "Cat",
        correct: false
      },
      {
        text: "Capall",
        correct: false
      },
      {
        text: "Póca",
        correct: false
      }
    ])
  },
  {
    question: "What is 'cat' as Gaeilge?",
    answers: shuffle([{
        text: "Cat",
        correct: true
      },
      {
        text: "Madra",
        correct: false
      },
      {
        text: "Luch",
        correct: false
      },
      {
        text: "Frog",
        correct: false
      }
    ])
  },
  {
    question: "What is 'horse' as Gaeilge?",
    answers: shuffle([{
        text: "Capall",
        correct: true
      },
      {
        text: "Bó",
        correct: false
      },
      {
        text: "Leon",
        correct: false
      },
      {
        text: "Eilifint",
        correct: false
      }
    ])
  },
  {
    question: "What is 'cow' as Gaeilge?",
    answers: shuffle([{
        text: "Bó",
        correct: true
      },
      {
        text: "Muc",
        correct: false
      },
      {
        text: "Capall",
        correct: false
      },
      {
        text: "Madra",
        correct: false
      }
    ])
  },
  {
    question: "What is 'sheep' as Gaeilge?",
    answers: shuffle([{
        text: "Caora",
        correct: true
      },
      {
        text: "Coinín",
        correct: false
      },
      {
        text: "Gabhar",
        correct: false
      },
      {
        text: "Loscán",
        correct: false
      }
    ])
  },
  {
    question: "What is 'pig' as Gaeilge?",
    answers: shuffle([{
        text: "Muc",
        correct: true
      },
      {
        text: "Bó",
        correct: false
      },
      {
        text: "Luch",
        correct: false
      },
      {
        text: "Francach",
        correct: false
      }
    ])
  },
  {
    question: "What is 'goat' as Gaeilge?",
    answers: shuffle([{
        text: "Gabhar",
        correct: true
      },
      {
        text: "Caora",
        correct: false
      },
      {
        text: "Capall",
        correct: false
      },
      {
        text: "Tíogar",
        correct: false
      }
    ])
  },
  {
    question: "What is 'chicken' as Gaeilge?",
    answers: shuffle([{
        text: "Cearc",
        correct: true
      },
      {
        text: "Lacha",
        correct: false
      },
      {
        text: "Madra",
        correct: false
      },
      {
        text: "Éan",
        correct: false
      }
    ])
  },
  {
    question: "What is 'duck' as Gaeilge?",
    answers: shuffle([{
        text: "Lacha",
        correct: true
      },
      {
        text: "Cearc",
        correct: false
      },
      {
        text: "Rón",
        correct: false
      },
      {
        text: "Féileacán",
        correct: false
      }
    ])
  },
  {
    question: "What is 'rabbit' as Gaeilge?",
    answers: shuffle([{
        text: "Coinín",
        correct: true
      },
      {
        text: "Luch",
        correct: false
      },
      {
        text: "Caora",
        correct: false
      },
      {
        text: "Gabhar",
        correct: false
      }
    ])
  },
  {
    question: "What is 'fox' as Gaeilge?",
    answers: shuffle([{
        text: "Sionnach",
        correct: true
      },
      {
        text: "Fia",
        correct: false
      },
      {
        text: "Madra",
        correct: false
      },
      {
        text: "Bear",
        correct: false
      }
    ])
  },
  {
    question: "What is 'bear' as Gaeilge?",
    answers: shuffle([{
        text: "Béar",
        correct: true
      },
      {
        text: "Leon",
        correct: false
      },
      {
        text: "Tíogar",
        correct: false
      },
      {
        text: "Eilifint",
        correct: false
      }
    ])
  },
  {
    question: "What is 'deer' as Gaeilge?",
    answers: shuffle([{
        text: "Fia",
        correct: true
      },
      {
        text: "Mac Tíre",
        correct: false
      },
      {
        text: "Féileacán",
        correct: false
      },
      {
        text: "Rón",
        correct: false
      }
    ])
  },
  {
    question: "What is 'wolf' as Gaeilge?",
    answers: shuffle([{
        text: "Mac Tíre",
        correct: true
      },
      {
        text: "Madra",
        correct: false
      },
      {
        text: "Leon",
        correct: false
      },
      {
        text: "Tíogar",
        correct: false
      }
    ])
  },
  {
    question: "What is 'mouse' as Gaeilge?",
    answers: shuffle([{
        text: "Luch",
        correct: true
      },
      {
        text: "Francach",
        correct: false
      },
      {
        text: "Coinín",
        correct: false
      },
      {
        text: "Ant",
        correct: false
      }
    ])
  },
  {
    question: "What is 'rat' as Gaeilge?",
    answers: shuffle([{
        text: "Francach",
        correct: true
      },
      {
        text: "Luch",
        correct: false
      },
      {
        text: "Iasc",
        correct: false
      },
      {
        text: "Madra",
        correct: false
      }
    ])
  },
  {
    question: "What is 'snake' as Gaeilge?",
    answers: shuffle([{
        text: "Nathair",
        correct: true
      },
      {
        text: "Iasc",
        correct: false
      },
      {
        text: "Loscán",
        correct: false
      },
      {
        text: "Mac Tíre",
        correct: false
      }
    ])
  },
  {
    question: "What is 'fish' as Gaeilge?",
    answers: shuffle([{
        text: "Iasc",
        correct: true
      },
      {
        text: "Deilf",
        correct: false
      },
      {
        text: "Míol Mór",
        correct: false
      },
      {
        text: "Loscán",
        correct: false
      }
    ])
  },
  {
    question: "What is 'bird' as Gaeilge?",
    answers: shuffle([{
        text: "Éan",
        correct: true
      },
      {
        text: "Bee",
        correct: false
      },
      {
        text: "Ant",
        correct: false
      },
      {
        text: "Cat",
        correct: false
      }
    ])
  },
  {
    question: "What is 'frog' as Gaeilge?",
    answers: shuffle([{
        text: "Loscán",
        correct: true
      },
      {
        text: "Iasc",
        correct: false
      },
      {
        text: "Coinín",
        correct: false
      },
      {
        text: "Luch",
        correct: false
      }
    ])
  }
]

const fruitQuestions = [{
  question: "What is 'apple' as Gaeilge?",
  answers: shuffle([{
      text: "Úll",
      correct: true
    },
    {
      text: "Banana",
      correct: false
    },
    {
      text: "Pineapple",
      correct: false
    },
    {
      text: "Síol",
      correct: false
    }
  ])
},
{
  question: "What is 'banana' as Gaeilge?",
  answers: shuffle([{
      text: "Banana",
      correct: true
    },
    {
      text: "Úll",
      correct: false
    },
    {
      text: "Pineapple",
      correct: false
    },
    {
      text: "Síol",
      correct: false
    }
  ])
},
{
  question: "What is 'grape' as Gaeilge?",
  answers: shuffle([{
      text: "Cruite",
      correct: true
    },
    {
      text: "Úll",
      correct: false
    },
    {
      text: "Banana",
      correct: false
    },
    {
      text: "Síol",
      correct: false
    }
  ])
},
{
  question: "What is 'orange' as Gaeilge?",
  answers: shuffle([{
      text: "Oráiste",
      correct: true
    },
    {
      text: "Úll",
      correct: false
    },
    {
      text: "Banana",
      correct: false
    },
    {
      text: "Síol",
      correct: false
    }
  ])
},
{
  question: "What is 'pineapple' as Gaeilge?",
  answers: shuffle([{
      text: "Ananás",
      correct: true
    },
    {
      text: "Úll",
      correct: false
    },
    {
      text: "Banana",
      correct: false
    },
    {
      text: "Síol",
      correct: false
    }
  ])
}
]

const colourQuestions = [{
  question: "What is 'red' as Gaeilge?",
  answers: shuffle([{
      text: "Dearg",
      correct: true
    },
    {
      text: "Gorm",
      correct: false
    },
    {
      text: "Buí",
      correct: false
    },
    {
      text: "Glas",
      correct: false
    }
  ])
},
{
  question: "What is 'green' as Gaeilge?",
  answers: shuffle([{
      text: "Glas",
      correct: true
    },
    {
      text: "Gorm",
      correct: false
    },
    {
      text: "Buí",
      correct: false
    },
    {
      text: "Dearg",
      correct: false
    }
  ])
},
{
  question: "What is 'blue' as Gaeilge?",
  answers: shuffle([{
      text: "Gorm",
      correct: true
    },
    {
      text: "Glas",
      correct: false
    },
    {
      text: "Buí",
      correct: false
    },
    {
      text: "Dearg",
      correct: false
    }
  ])
},
{
  question: "What is 'yellow' as Gaeilge?",
  answers: shuffle([{
      text: "Buí",
      correct: true
    },
    {
      text: "Gorm",
      correct: false
    },
    {
      text: "Glas",
      correct: false
    },
    {
      text: "Dearg",
      correct: false
    }
  ])
},
{
  question: "What is 'black' as Gaeilge?",
  answers: shuffle([{
      text: "Dubh",
      correct: true
    },
    {
      text: "Gorm",
      correct: false
    },
    {
      text: "Glas",
      correct: false
    },
    {
      text: "Buí",
      correct: false
    }
  ])
}
]

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


nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  document.getElementById('category-select').classList.add('hide');
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
  clearStatusClass(document.body);  
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
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

/** Questions array */


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const questions = [
  {
    question: "What is 'dog' as Gaeilge?",
    answers: shuffle([
      { text: "Madra", correct: true },
      { text: "Cat", correct: false },
      { text: "Capall", correct: false },
      { text: "Póca", correct: false }
    ])
  },
  {
    question: "What is 'cat' as Gaeilge?",
    answers: shuffle([
      { text: "Cat", correct: true },
      { text: "Madra", correct: false },
      { text: "Luch", correct: false },
      { text: "Frog", correct: false }
    ])
  },
  {
    question: "What is 'horse' as Gaeilge?",
    answers: shuffle([
      { text: "Capall", correct: true },
      { text: "Bó", correct: false },
      { text: "Leon", correct: false },
      { text: "Eilifint", correct: false }
    ])
  },
  {
    question: "What is 'cow' as Gaeilge?",
    answers: shuffle([
      { text: "Bó", correct: true },
      { text: "Muc", correct: false },
      { text: "Capall", correct: false },
      { text: "Madra", correct: false }
    ])
  },
  {
    question: "What is 'sheep' as Gaeilge?",
    answers: shuffle([
      { text: "Caora", correct: true },
      { text: "Coinín", correct: false },
      { text: "Gabhar", correct: false },
      { text: "Loscán", correct: false }
    ])
  },
  {
    question: "What is 'pig' as Gaeilge?",
    answers: shuffle([
      { text: "Muc", correct: true },
      { text: "Bó", correct: false },
      { text: "Luch", correct: false },
      { text: "Francach", correct: false }
    ])
  },
  {
    question: "What is 'goat' as Gaeilge?",
    answers: shuffle([
      { text: "Gabhar", correct: true },
      { text: "Caora", correct: false },
      { text: "Capall", correct: false },
      { text: "Tíogar", correct: false }
    ])
  },
  {
    question: "What is 'chicken' as Gaeilge?",
    answers: shuffle([
      { text: "Cearc", correct: true },
      { text: "Lacha", correct: false },
      { text: "Madra", correct: false },
      { text: "Éan", correct: false }
    ])
  },
  {
    question: "What is 'duck' as Gaeilge?",
    answers: shuffle([
      { text: "Lacha", correct: true },
      { text: "Cearc", correct: false },
      { text: "Rón", correct: false },
      { text: "Féileacán", correct: false }
    ])
  },
  {
    question: "What is 'rabbit' as Gaeilge?",
    answers: shuffle([
      { text: "Coinín", correct: true },
      { text: "Luch", correct: false },
      { text: "Caora", correct: false },
      { text: "Gabhar", correct: false }
    ])
  },
  {
    question: "What is 'fox' as Gaeilge?",
    answers: shuffle([
      { text: "Sionnach", correct: true },
      { text: "Fia", correct: false },
      { text: "Madra", correct: false },
      { text: "Bear", correct: false }
    ])
  },
  {
    question: "What is 'bear' as Gaeilge?",
    answers: shuffle([
      { text: "Béar", correct: true },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false },
      { text: "Eilifint", correct: false }
    ])
  },
  {
    question: "What is 'deer' as Gaeilge?",
    answers: shuffle([
      { text: "Fia", correct: true },
      { text: "Mac Tíre", correct: false },
      { text: "Féileacán", correct: false },
      { text: "Rón", correct: false }
    ])
  },
  {
    question: "What is 'wolf' as Gaeilge?",
    answers: shuffle([
      { text: "Mac Tíre", correct: true },
      { text: "Madra", correct: false },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false }
    ])
  },
  {
    question: "What is 'mouse' as Gaeilge?",
    answers: shuffle([
      { text: "Luch", correct: true },
      { text: "Francach", correct: false },
      { text: "Coinín", correct: false },
      { text: "Ant", correct: false }
    ])
  },
  {
    question: "What is 'rat' as Gaeilge?",
    answers: shuffle([
      { text: "Francach", correct: true },
      { text: "Luch", correct: false },
      { text: "Iasc", correct: false },
      { text: "Madra", correct: false }
    ])
  },
  {
    question: "What is 'snake' as Gaeilge?",
    answers: shuffle([
      { text: "Nathair", correct: true },
      { text: "Iasc", correct: false },
      { text: "Loscán", correct: false },
      { text: "Mac Tíre", correct: false }
    ])
  },
  {
    question: "What is 'fish' as Gaeilge?",
    answers: shuffle([
      { text: "Iasc", correct: true },
      { text: "Deilf", correct: false },
      { text: "Míol Mór", correct: false },
      { text: "Loscán", correct: false }
    ])
  },
  {
    question: "What is 'bird' as Gaeilge?",
    answers: shuffle([
      { text: "Éan", correct: true },
      { text: "Bee", correct: false },
      { text: "Ant", correct: false },
      { text: "Cat", correct: false }
    ])
  },
  {
    question: "What is 'frog' as Gaeilge?",
    answers: shuffle([
      { text: "Loscán", correct: true },
      { text: "Iasc", correct: false },
      { text: "Coinín", correct: false },
      { text: "Luch", correct: false }
    ])
  },
  {
    question: "What is 'butterfly' as Gaeilge?",
    answers: shuffle([
      { text: "Féileacán", correct: true },
      { text: "Bee", correct: false },
      { text: "Seangán", correct: false },
      { text: "Éan", correct: false }
    ])
  },
  {
    question: "What is 'bee' as Gaeilge?",
    answers: shuffle([
      { text: "Beacha", correct: true },
      { text: "Féileacán", correct: false },
      { text: "Ant", correct: false },
      { text: "Éan", correct: false }
    ])
  },
  {
    question: "What is 'ant' as Gaeilge?",
    answers: shuffle([
      { text: "Seangán", correct: true },
      { text: "Francach", correct: false },
      { text: "Luch", correct: false },
      { text: "Bee", correct: false }
    ])
  },
  {
    question: "What is 'lion' as Gaeilge?",
    answers: shuffle([
      { text: "Leon", correct: true },
      { text: "Tíogar", correct: false },
      { text: "Béar", correct: false },
      { text: "Mac Tíre", correct: false }
    ])
  },
  {
    question: "What is 'tiger' as Gaeilge?",
    answers: shuffle([
      { text: "Tíogar", correct: true },
      { text: "Leon", correct: false },
      { text: "Capall", correct: false },
      { text: "Gabhar", correct: false }
    ])
  },
  {
    question: "What is 'elephant' as Gaeilge?",
    answers: shuffle([
      { text: "Eilifint", correct: true },
      { text: "Míol Mór", correct: false },
      { text: "Deilf", correct: false },
      { text: "Rón", correct: false }
    ])
  },
  {
    question: "What is 'monkey' as Gaeilge?",
    answers: shuffle([
      { text: "Moncaí", correct: true },
      { text: "Leon", correct: false },
      { text: "Tíogar", correct: false },
      { text: "Cat", correct: false }
    ])
  },
  {
    question: "What is 'whale' as Gaeilge?",
    answers: shuffle([
      { text: "Míol Mór", correct: true },
      { text: "Deilf", correct: false },
      { text: "Iasc", correct: false },
      { text: "Rón", correct: false }
    ])
  },
  {
    question: "What is 'dolphin' as Gaeilge?",
    answers: shuffle([
      { text: "Deilf", correct: true },
      { text: "Míol Mór", correct: false },
      { text: "Iasc", correct: false },
      { text: "Loscán", correct: false }
    ])
  },
  {
    question: "What is 'seal' as Gaeilge?",
    answers: shuffle([
      { text: "Rón", correct: true },
      { text: "Iasc", correct: false },
      { text: "Deilf", correct: false },
      { text: "Madra", correct: false }
    ])
  }
]
