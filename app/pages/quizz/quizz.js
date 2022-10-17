import './style.css'
import { Question } from '../../components/Quizz/Question/Question'
import { QuizzMenu } from '../../components/Quizz/QuizzMenu/QuizzMenu'
import { getData } from '../../services/getData'
import { cleanContainer } from '../../utils/cleanContainer'

export const runQuizz = async () => {
  const main = document.querySelector('.main-cont')
  cleanContainer(main)

  const quizzData = await getData('quizz')
  let index = 0
  let questionCounter = 1

  const quizz = `<section class='quizz'></section>`
  const menu = `<div class='quizz-menu'></div>`
  main.innerHTML += quizz
  main.innerHTML += menu

  Question(quizzData[0])
  QuizzMenu(questionCounter, quizzData.length)

  // Next Button
  document.querySelector('.next-btn').addEventListener('click', () => {
    index += 1
    questionCounter += 1
    cleanContainer(document.querySelector('.quizz'))
    Question(quizzData[index])
    updateCounter(questionCounter)
  })
}

const updateCounter = (current) => {
  document.querySelector('.quizz-current').textContent = current
}
