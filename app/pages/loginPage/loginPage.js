import './style.css'
import { Header } from '../../components/Header/Header'
import { Login } from '../../components/Login/Login'
import { loginLayout } from '../../components/layouts/loginLayout/loginLayout'
import { Footer } from '../../components/Footer/Footer'

const setRandomBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const app = document.querySelector('#app')
  app.style.backgroundColor = `#${randomColor}`
}

export const loginPage = () => {
  loginLayout()
  document.querySelector('.login-layout').innerHTML += Header()
  document.querySelector('.login-layout').innerHTML += Login()
  document.querySelector('.login-layout').innerHTML += Footer()

  const backBtn = document.querySelector('.back-btn')
  backBtn.addEventListener('click', (e) => console.log(e))

  const colorBtn = document.querySelector('.color-btn')
  colorBtn.addEventListener('click', setRandomBg)

  const loginBtn = document.querySelector('.login-btn')
  loginBtn.addEventListener('click', (e) => {
    console.log(e)
  })
}
