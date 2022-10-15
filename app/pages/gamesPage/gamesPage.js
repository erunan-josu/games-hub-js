import './style.css'
import { cleanContainer } from '../../utils/cleanContainer'
import { gamesLayout } from '../../components/Layouts/Games/Games'
import { getData } from '../../services/getData'
import { GamePreview } from '../../components/GamePreview/GamePreview'
export const gamesPage = async () => {
  const mainContainer = document.querySelector('.main-cont')
  cleanContainer(mainContainer)
  mainContainer.innerHTML = gamesLayout()
  const gamesList = await getData('games')
  console.log(gamesList)
  gamesList.forEach((game) => {
    document.querySelector('.games-layout').innerHTML += GamePreview(game)
  })
}
