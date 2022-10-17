import './style.css'
import { Button } from '../../Button/Button'

export const QuizzMenu = (current, total) => {
  document.querySelector('.quizz-menu').innerHTML += `
  <p>
    <span class='quizz-current'>${current}</span>
    /
    <span class='quizz-total'>${total}</span></p>
  ${Button('Next', 'next-btn')}
  `
}
