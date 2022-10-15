import './style.css'
import { getData } from '../../services/getData'
import { Header } from '../../components/Header/Header'
import { Login } from '../../components/Login/Login'
import { GeneralLayout } from '../../components/Layouts/General/Layout'
import { Footer } from '../../components/Footer/Footer'
import { postData } from '../../services/postData'
import { gamesPage } from '../gamesPage/gamesPage'

const setRandomBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const app = document.querySelector('#app')
  app.style.backgroundColor = `#${randomColor}`
}

export const loginPage = () => {
  GeneralLayout()
  document.querySelector('.general-layout').innerHTML += Header()
  document.querySelector('.general-layout').innerHTML += Login()
  document.querySelector('.general-layout').innerHTML += Footer()

  const backBtn = document.querySelector('.back-btn')
  backBtn.addEventListener('click', (e) => console.log(e))

  const colorBtn = document.querySelector('.color-btn')
  colorBtn.addEventListener('click', setRandomBg)

  const loginBtn = document.querySelector('.login-btn')
  loginBtn.addEventListener('click', async (e) => {
    const input = document.querySelector('#user-input')
    if (input.value.length <= 0) {
      alert('Your name must have at least 1 character')
    } else {
      const usersList = await getData('users')
      const findUser = usersList.findIndex((user) => user.name === input.value)
      if (findUser < 0) {
        postData('users', input.value)
        localStorage.setItem('user', input.value)
        gamesPage()
      } else {
        gamesPage()
      }
    }
  })
}
