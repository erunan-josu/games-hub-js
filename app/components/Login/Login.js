import './style.css'
import { Button } from '../Button/Button'
export const Login = () => {
  return `
    <div class='login-cont'>
        <h1>NEOLAND</h1>
        <h2>Game Hub</h2>
        <label for='user-input'>Introduce tu nombre</label>
        <input type='text' id='user-input' min='1'>
        ${Button('👍', 'login-btn')}
    </div>
    `
}
