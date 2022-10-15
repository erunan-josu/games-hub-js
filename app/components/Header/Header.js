import './style.css'
import { Button } from '../Button/Button'
export const Header = () => {
  return `
        <header>
          ${Button('🔙', 'back-btn')}
          ${Button('color-mode', 'color-btn')}
        </header>
`
}
