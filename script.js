const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Je _____ (etre)',
    answers: [
      { text: 'es', correct: false },
      { text: 'suis', correct: true },
      { text: 'est', correct: false },
      { text: 'sont', correct: false }
    ]
  },
  {
    question: 'Elle_______(savoir)',
    answers: [
      { text: 'sais', correct: false },
      { text: 'sait', correct: true },
      { text: 'savons', correct: false },
      { text: 'savent', correct: false }
    ]
  },
  {
    question: 'Ils______(recevoir)',
    answers: [
      { text: 'reçois', correct: false },
      { text: 'recevons', correct: false },
      { text: 'recevez', correct: false },
      { text: 'reçoivent', correct: true }
    ]
  },
  {
    question: 'Nous________(choisir)',
    answers: [
      { text: 'choisis', correct: false },
      { text: 'choisit', correct: false },
      { text: 'choisissent', correct: true },
      { text: 'choisissons', correct: false }
    ]
  },
  {
    question: 'Vous_______(boire)',
    answers: [
      { text: 'bois', correct: false },
      { text: 'boit', correct: false },
      { text: 'boivent', correct: false },
      { text: 'buvez', correct: true }
    ]
  },
  {
    question: 'Elles______(faire)',
    answers: [
      { text: 'fais', correct: false },
      { text: 'fait', correct: false },
      { text: 'font', correct: true },
      { text: 'faisons', correct: false }
    ]
  },
  {
    question: 'Je_____(manger)',
    answers: [
      { text: 'mange', correct: true },
      { text: 'manges', correct: false },
      { text: 'mangez', correct: false },
      { text: 'mangent', correct: false }
    ]
  },
  {
    question: 'Je________(metter)',
    answers: [
      { text: 'mets', correct: true },
      { text: 'mettons', correct: false },
      { text: 'mettez', correct: false },
      { text: 'met', correct: false }
    ]
  },
  {
    question: 'Nous_______(commencer)',
    answers: [
      { text: 'commence', correct: false },
      { text: 'commençons', correct: true },
      { text: 'commences', correct: false },
      { text: 'commencez', correct: false }
    ]
  },
  {
    question: 'Il________(dormir)',
    answers: [
      { text: 'dors', correct: false },
      { text: 'dormons', correct: false },
      { text: 'dormez', correct: false },
      { text: 'dort', correct: true }
    ]
  },
  {
    question: 'Nous_______(écrire)',
    answers: [
      { text: 'écris', correct: false },
      { text: 'écrivons', correct: true },
      { text: 'écrivent', correct: false },
      { text: 'écrit', correct: false}
    ]
  },
  {
    question: 'Ils________(prendre)',
    answers: [
      { text: 'prends', correct: false },
      { text: 'prend', correct: false },
      { text: 'prenons', correct: false },
      { text: 'prennent', correct: true}
    ]
  },
  {
    question: 'Je _____ (venir)',
    answers: [
      { text: 'viens', correct: true },
      { text: 'vient', correct: false },
      { text: 'venez', correct: false },
      { text: 'venons', correct: false}
    ]
  },
  {
    question: 'Je________(ouvrir)',
    answers: [
      { text: 'ourvent', correct: false },
      { text: 'ourvez', correct: false },
      { text: 'ouvre', correct: true },
      { text: 'ouvres', correct: false}
    ]
  },
  {
    question: 'Elle_________(se réveiller)',
    answers: [
      { text: 'se réveille', correct: true },
      { text: 'me réveilles', correct: false },
      { text: 'vous réveillez', correct: false },
      { text: 'se réveillent', correct: false}
    ]
  },
  {
    question: 'Vous________(grandir)',
    answers: [
      { text: 'grandis', correct: false },
      { text: 'grandit', correct: false },
      { text: 'grandissons', correct: false },
      { text: 'grandissez', correct: true}
    ]
  },
  {
    question: 'Il________(finir)',
    answers: [
      { text: 'finis', correct: false },
      { text: 'finissons', correct: false },
      { text: 'finissez', correct: false },
      { text: 'finit', correct: true}
    ]
  },
  {
    question: 'Tu________(préférer)',
    answers: [
      { text: 'préfére', correct: false },
      { text: 'préférez', correct: false },
      { text: 'préférent', correct: false },
      { text: 'préféres', correct: true}
    ]
  },
  {
    question: 'Ils________(nettoyer)',
    answers: [
      { text: 'nettoie', correct: false },
      { text: 'nettoies', correct: false },
      { text: 'nettoient', correct: true },
      { text: 'nettoyez', correct: false}
    ]
  },
  {
    question: 'Nous_________(dire)',
    answers: [
      { text: 'dis', correct: false },
      { text: 'disons', correct: true },
      { text: 'dit', correct: false },
      { text: 'disent', correct: false}
    ]
  },
  {
    question: 'Elle________(lire)',
    answers: [
      { text: 'lis', correct: false },
      { text: 'lisons', correct: false },
      { text: 'lisent', correct: false },
      { text: 'lit', correct: true}
    ]
  },
  {
    question: 'Ils________(connaître)',
    answers: [
      { text: 'connaissent', correct: true },
      { text: 'connaissons', correct: false },
      { text: 'connaissez', correct: false },
      { text: 'connais', correct: false}
    ]
  },
  {
    question: 'Nous_______(recevoir)',
    answers: [
      { text: 'recevons', correct: true },
      { text: 'recevent', correct: false },
      { text: 'reçoit', correct: false },
      { text: 'reçois', correct: false}
    ]
  },
  {
    question: 'Je_______(se lever)',
    answers: [
      { text: 'te léves', correct: false },
      { text: 'se léve', correct: false },
      { text: 'me léve', correct: true },
      { text: 'nous levons', correct: false}
    ]
  },
  {
    question: 'Ils_________(courir)',
    answers: [
      { text: 'cours', correct: false },
      { text: 'courent', correct: true },
      { text: 'courez', correct: false },
      { text: 'court', correct: false}
    ]
  },
]