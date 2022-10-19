import './style.css'
export const GamePreview = ({ name, url }) => {
  return `
    <div class='game-preview'>
        <img src='${url}' alt='${name} preview'>
        <div class='game-init-btn' data-name='${name}'>${name}</div>
    </div>
    `
}
