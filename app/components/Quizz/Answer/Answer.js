import './style.css'
export const Answer = (item) => `
        <li class='quizz-answer'>
            <input name='quizz-answer' id='${item}' type='radio' value='${item}' > <label for='${item}'>${item}</label>
        </li>
        `
