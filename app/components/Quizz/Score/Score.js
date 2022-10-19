import './style.css'
import { Button } from '../../Button/Button'
import { runQuizz } from '../../../pages/quizz/quizz'
import { resetScore } from '../Question/Question'

export const Score = (element, myScore, total) => {
  const msg = () => {
    if (myScore < 5) {
      return 'You need to practice more to become a better Pokemon trainer 😁'
    } else if (myScore < 9) {
      return 'WOW!! You are a good Pokemon trainer! 🥳'
    } else {
      return 'OOOHHH!! You must be a Pokemon master 😱'
    }
  }

  const template = `
    <section class='score-section'>
        <h2>Score: ${myScore}/${total}</h2>
        <h3>${msg()}</h3>
        ${Button('Reload', 'reload-btn')}
    </section>
    `
  element.innerHTML += template

  const reloadBtn = document.querySelector('.reload-btn')
  resetScore(myScore)
  reloadBtn.addEventListener('click', runQuizz)
}
