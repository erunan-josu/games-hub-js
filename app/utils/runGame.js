import { runTicTacToe } from '../pages/tic-tac-toe/ticTacToe'
import { runQuizz } from '../pages/quizz/quizz'

export const runGame = (param) => {
  document.querySelector('header').classList.remove('header-no-back')
  document.querySelector('.back-btn').classList.remove('invisible')

  switch (param) {
    case 'TicTacToe':
      runTicTacToe()
      break
    case 'Quizz':
      runQuizz()
      break
    default:
      alert('Game not found')
  }
}
