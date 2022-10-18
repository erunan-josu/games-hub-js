import './style.css'
import { Button } from '../../Button/Button'
import { runQuizz } from '../../../pages/quizz/quizz'

export const Score = (element, myScore, total) => {
  const template = `
    <section class='score-section'>
        <h2>Congratulations!!🥳</h2>
        <h3>You are a good Pokemon trainer</h3>
        <p>Score: ${myScore}/${total}</p>
        ${Button('Reload', 'reload-btn')}
    </section>
    `
  element.innerHTML += template

  const reloadBtn = document.querySelector('.reload-btn')
  reloadBtn.addEventListener('click', runQuizz)
}
