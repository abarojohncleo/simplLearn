const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

const answerButtonElements = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions=questions.sort(() => Math.random() -0.5)
  currentQuestionIndex = 0; 
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
  quizScore = 0;
}

function setNextQuestion(){
  resetState();
  showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button')
    button.innerText = answer.text;
    button.classList.add('btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElements.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonElements.firstChild){
    answerButtonElements.removeChild(answerButtonElements.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)
  Array.from(answerButtonElements.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove("hide")
  }else{
    startButton.innerText = "restart"
    startButton.classList.remove("hide")
  }
  if(selectedButton.dataset = correct){
    quizScore++
  }
  document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add("correct")
  }else{
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Which one of these is a JavaScript Framework ?",
    answers: [
      {text: 'Phyton', correct: false},
      {text: 'Django', correct: false},
      {text: 'React', correct: true},
      {text: 'Eclipse', correct: false},
    ],
  },
  {
    question: "Which one is a Python Framework?",
    answers: [
      {text: 'Phyton', correct: false},
      {text: 'Django', correct: true},
      {text: 'React', correct: false},
      {text: 'Eclipse', correct: false},
    ],
  },
  {
    question: "Which programming language is written mostly in Java and its primary use is for developing Java applications?",
    answers: [
      {text: 'Phyton', correct: false},
      {text: 'Django', correct: false},
      {text: 'React', correct: false},
      {text: 'Eclipse', correct: true},
    ],
  },
]