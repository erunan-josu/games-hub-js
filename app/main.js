import './style.css'

import { loginPage } from './pages/loginPage/loginPage'
import { gamesPage } from './pages/gamesPage/gamesPage'

loginPage()
document.querySelector('.back-btn').addEventListener('click', gamesPage)
