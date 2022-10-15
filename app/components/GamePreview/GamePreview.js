import './style.css'
export const GamePreview = ({ name, url }) => {
  return `
    <figure class='game-preview'>
        <img src='${url}' alt='${name} preview'>
        <figcaption>${name}</figcaption>
    </figure>
    `
}
