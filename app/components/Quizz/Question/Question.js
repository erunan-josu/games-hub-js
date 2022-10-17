import './style.css'
import { Answer } from '../Answer/Answer'
export const Question = (obj) => {
  const { question, answers, correct } = obj
  const template = `
  <h2 class='question-container'>${question}</h2>
  <ul class='answers-list'></ul>
`

  document.querySelector('.quizz').innerHTML += template

  answers.forEach((answer) => {
    document.querySelector('.answers-list').innerHTML += Answer(answer)
  })

  // Input
  const inputsNode = document.querySelectorAll('input[name="quizz-answer"]')

  inputsNode.forEach((input) => {
    input.addEventListener('click', (e) => {
      if (e.target.value === correct) {
        console.log('correcto')
        e.target.parentElement.style.color = '#82c91e'
      } else {
        e.target.parentElement.style.color = '#cc2027'
      }
      inputsNode.forEach((input) => input.setAttribute('disabled', true))
    })
  })
}
