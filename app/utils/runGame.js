import { runTicTacToe } from '../pages/tic-tac-toe/ticTacToe'
import { runQuizz } from '../pages/quizz/quizz'
import { runPokedex } from '../pages/pokedexPage/pokedexPage'

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
    case 'Pokedex':
      runPokedex()
      break
    default:
      alert('Game not found')
  }
}
