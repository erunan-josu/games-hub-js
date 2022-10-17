import './style.css'
import { runGame } from '../../utils/runGame'
import { cleanContainer } from '../../utils/cleanContainer'
import { gamesLayout } from '../../components/Layouts/Games/Games'
import { getData } from '../../services/getData'
import { GamePreview } from '../../components/GamePreview/GamePreview'
import { getLocalUser } from '../../utils/getLocalUser'
export const gamesPage = async () => {
  document.querySelector('header').classList.add('header-no-back')
  document.querySelector('.back-btn').classList.add('invisible')

  const mainContainer = document.querySelector('.main-cont')
  cleanContainer(mainContainer)

  mainContainer.innerHTML += `<p class='greeting'>Bienvenido 👋 ${getLocalUser()}</p>`

  mainContainer.innerHTML += gamesLayout()
  const gamesList = await getData('games')

  gamesList.forEach((game) => {
    document.querySelector('.games-layout').innerHTML += GamePreview(game)
  })

  const gameInitBtns = document.querySelectorAll('.game-init-btn')

  gameInitBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      runGame(e.target.dataset.name)
      document.querySelector('.back-btn')
    })
  })
}
