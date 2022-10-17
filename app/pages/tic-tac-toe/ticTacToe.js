import './style.css'
import { Button } from '../../components/Button/Button'
import { cleanContainer } from '../../utils/cleanContainer'
import { getRandomNum } from '../../utils/getRandomNum'

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

let player1 = true

export const runTicTacToe = () => {
  const mainContainer = document.querySelector('.main-cont')
  cleanContainer(mainContainer)

  const template = `
  <div class='game-container'>
    ${playersTemplate()}
    <div class='cells-container'></div>
    <div class='msg-container'>
      <p class='win-msg'></p>
      ${Button('Reload', 'reload-btn')}
    </div>
  </div>
  `
  mainContainer.innerHTML += template

  for (let i = 0; i < 9; i++) {
    document.querySelector(
      '.cells-container'
    ).innerHTML += `<div class='cell'></div>`
  }

  const cells = document.querySelectorAll('.cell')
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      // check if already has x or o
      if (
        e.target.classList.contains('x-cell') ||
        e.target.classList.contains('o-cell')
      )
        return

      // Print x
      cell.innerHTML += 'x'
      cell.classList.add('x-cell')

      // check if all cells has x or o
      if (checkWin(cells, 'x-cell')) {
        alert('Player 1 wins!!!')
        showWinnerMsg()
        return
      }
      if (checkFinish(cells)) {
        alert("It's a draw!!!")
        reloadGame()
        return
      }
      player1 = !player1
      // IA turn
      iaTurn()
    })
  })

  document.querySelector('.reload-btn').addEventListener('click', reloadGame)
}

const iaTurn = () => {
  const cells = document.querySelectorAll('.cell')

  if (checkFinish(cells)) return
  const randomCell = getRandomCell(cells)
  if (randomCell) {
    randomCell.innerHTML = 'o'
    randomCell.classList.add('o-cell')
  }
  if (checkWin(cells, 'o-cell')) {
    showWinnerMsg()
    return
  }
  player1 = !player1
}

const getRandomCell = (cells) => {
  let index = getRandomNum(8)
  while (
    cells[index].classList.contains('x-cell') ||
    cells[index].classList.contains('o-cell')
  ) {
    index = getRandomNum(8)
  }
  return cells[index]
}

const checkFinish = (array) => {
  return [...array].every(
    (item) =>
      item.classList.contains('x-cell') || item.classList.contains('o-cell')
  )
}

const reloadGame = () => {
  const cells = document.querySelectorAll('.cell')

  cells.forEach((cell) => {
    cell.classList.remove('x-cell')
    cell.classList.remove('o-cell')
    cell.innerHTML = ''
  })
}

const checkWin = (cells, currentClass) => {
  return winCondition.some((array) => {
    return array.every((i) => cells[i].classList.contains(currentClass))
  })
}

const showWinnerMsg = () => {
  const name = player1
    ? document.querySelector('.p1Name').textContent
    : document.querySelector('.p2Name').textContent
  document.querySelector('.win-msg').innerHTML = `${name} WINS!!! 🥳`
}

const playersTemplate = () => `
<div class='players-container'>
  <p class='p1Name'>${localStorage.getItem('user')}</p>
  VS
  <p class='p2Name'>IA</p>
</div>
`
