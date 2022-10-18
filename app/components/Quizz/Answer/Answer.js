export const Answer = (name) => {
  return `
  <li class='quizz-answer'>
    <input type='radio' id='${name}' name='answer' class='quizz-input' value='${name}'>
    <label for='${name}'>${name}</label>
  </li>`
}
