// variable declaration
const question = document.querySelector('#question')
const answerBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']
let points = 0
let actualQuestion = 0

// questions
const questions = [
    {
        'question': 'Em JavaScript, qual método é usado para adicionar um item ao final de uma array?',
        'answers': [
            {
                'answer': 'push()',
                'correct': true
            },
            {
                'answer': 'pop()',
                'correct': false
            },
            {
                'answer': 'shift()',
                'correct': false
            },
            {
                'answer': 'unshift()',
                'correct': false
            }
        ]
    },
    {
        'question': 'Qual é a função do operador ++ em linguagens como C++ e JavaScript?',
        'answers': [
            {
                'answer': 'Decrementar o valor de uma variável em 1',
                'correct': false
            },
            {
                'answer': 'Comparar dois valores',
                'correct': false
            },
            {
                'answer': 'Incrementar o valor de uma variável em 1',
                'correct': true
            },
            {
                'answer': 'Concatenar strings',
                'correct': false
            }
        ]
    },
    {
        'question': 'Qual é a palavra-chave usada para declarar uma classe em Java?',
        'answers': [
            {
                'answer': 'interface',
                'correct': false
            },
            {
                'answer': 'struct',
                'correct': false
            },
            {
                'answer': 'class',
                'correct': true
            },
            {
                'answer': 'object',
                'correct': false
            }
        ]
    },
    {
        'question': 'Em Python, como você importa um módulo chamado math?',
        'answers': [
            {
                'answer': 'include math',
                'correct': false
            },
            {
                'answer': 'require math',
                'correct': false
            },
            {
                'answer': 'use math',
                'correct': false
            },
            {
                'answer': 'import math',
                'correct': true
            }
        ]
    },
   
]

// quiz replacement for first question
function init() {
    createQuestion(actualQuestion)
}

// create question
function createQuestion(i) {

    // clear the previous question
    const oldButtons = answerBox.querySelectorAll("button").forEach(function(btn) {
        btn.remove()
    })

    // change question text
    const questionText = question.querySelector('#question-text')
    const questionNumber = question.querySelector('#question-number')

    questionText.textContent = questions[i].question
    questionNumber.textContent = i + 1

    //insert alternatives
    questions[i].answers.forEach(function(answer, i) {

        // create a quiz function template
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true)

        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')

        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        answerTemplate.setAttribute('correct-answer', answer['correct'])

        // remove hide and template class
        answerTemplate.classList.remove('hide')
        answerTemplate.classList.remove('answer-template')

        // insert the alternative on the screen
        answerBox.appendChild(answerTemplate)

        // insert click event on buttons
        answerTemplate.addEventListener('click', function() {
            checkAnswer(this)
        })

    })

    actualQuestion++

}

// checking user response
function checkAnswer(btn) {
    
    const buttons = answerBox.querySelectorAll('button')

    buttons.forEach(function(button) {

        if(button.getAttribute('correct-answer') === 'true') {

            button.classList.add('correct-answer')

            // checks if the user answered the question correctly
            if(btn === button) {
                points++
            }

        } else {

            button.classList.add('wrong-answer')

        }

    })


    nextQuestion()

}

function nextQuestion() {

    setTimeout(function() {

        if(actualQuestion >= questions.length) {
            showSuccessMessage()
            return
        } 

        createQuestion(actualQuestion)

    }, 700)

}

// displays the completion screen
function showSuccessMessage() {

    hideOrShowQuizz()

    // score calculation
    const score = ((points / questions.length) * 100)

    const displayScore = document.querySelector('#display-score span')
    displayScore.textContent = score.toString()

    const correctAnswers = document.querySelector('#correct-answer')
    correctAnswers.textContent = points

    const totalQuestions = document.querySelector('#questions-qty')
    totalQuestions.textContent = questions.length

}

function hideOrShowQuizz() {
    quizzContainer.classList.toggle('hide')
    scoreContainer.classList.toggle('hide')
}

const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener('click', function() {

    actualQuestion = 0
    points = 0
    hideOrShowQuizz()
    init()
})

// quiz initialization
init()