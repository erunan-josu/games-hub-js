import { cleanContainer } from '../../utils/cleanContainer'
import { getData } from '../../services/getData'
import { Question } from '../../components/Quizz/Question/Question'

export const runQuizz = async () => {
  cleanContainer(document.querySelector('.main-cont'))

  const quizzData = await getData('quizz')
  const index = 0
  const length = quizzData.length

  Question(quizzData[0], index, length, quizzData)
}
