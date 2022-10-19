import './style.css'
import { Answer } from '../Answer/Answer'
import { Button } from '../../Button/Button'
import { cleanContainer } from '../../../utils/cleanContainer'
import { Score } from '../Score/Score'

let correctAnswers = 0

export const Question = ({ question, answers, correct }, index, total, arr) => {
  cleanContainer(document.querySelector('.main-cont'))

  const template = `
    <div class='quizz-container'>
        <div class='question-container'>
            <h2>${question}</h2>
            <ul class='answers-list'></ul>
        </div>
        <div class='menu-container'>
            <p>
                <span class='current'></span>
                /
                <span class='total'></span>
            </p>
        </div>
    </div>
    `
  document.querySelector('.main-cont').innerHTML += template

  answers.forEach((answer) => {
    document.querySelector('.answers-list').innerHTML += Answer(answer)
  })

  updatePage(index + 1, total)

  const checkAnswer = () => {
    const checked = document.querySelector('input[type="radio"]:checked').value
    return checked === correct ? true : false
  }

  const createButton = (index, total, arr) => {
    const menu = document.querySelector('.menu-container')
    if (index === total) {
      menu.innerHTML += Button('Finish', 'finish-btn')
      document.querySelector('.finish-btn').addEventListener('click', () => {
        const quizzContainer = document.querySelector('.quizz-container')
        checkAnswer() && correctAnswers++
        cleanContainer(quizzContainer)
        Score(quizzContainer, correctAnswers, total)
      })
    } else {
      menu.innerHTML += Button('Next', 'next-btn')
      document.querySelector('.next-btn').addEventListener('click', () => {
        if (checkChecked().length <= 0) return
        checkAnswer() && correctAnswers++
        Question(arr[index], index, arr.length, arr)
      })
    }
  }

  createButton(index + 1, total, arr)
}

export const resetScore = () => {
  correctAnswers = 0
}

const updatePage = (current, total) => {
  document.querySelector('.current').textContent = current
  document.querySelector('.total').textContent = total
}

const checkChecked = () => {
  return document.querySelectorAll('input[type="radio"]:checked')
}
