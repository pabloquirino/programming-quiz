// variable declaration
const question = document.querySelector('#question')
const answerBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']
let points = 0
let actualQuestions = 0

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
    createQuestion(actualQuestions)
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

        })

    })

    actualQuestions++
    
}

// quiz initialization
init()