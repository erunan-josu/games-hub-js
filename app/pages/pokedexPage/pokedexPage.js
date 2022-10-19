import './style.css'
import { PkmnCard } from '../../components/Pokedex/PkmnCard/PkmnCard'
import { getPokemons } from '../../services/pokemon/getPokemons'
import { cleanContainer } from '../../utils/cleanContainer'
import { PkmnSearchbar } from '../../components/Pokedex/PkmnSearchbar/PkmnSearchbar'
import { PkmnHero } from '../../components/Pokedex/PkmnHero/PkmnHero'

export const runPokedex = async () => {
  const mainContainer = document.querySelector('.main-cont')
  cleanContainer(mainContainer)

  const pokemonsData = await getPokemons()

  mainContainer.innerHTML += `
  <section class='pkdx-container'>
    <div class='pkdx-searchbar-container'></div>
    <div class='pkdx-hero-container'></div>
    <div class='pkdx-cards-container'></div>
  </section>
  `
  PkmnSearchbar(pokemonsData)
  PkmnHero(pokemonsData[2])
  showPokemons(pokemonsData)
  events(pokemonsData)
  cardEvent(pokemonsData)
}

const events = (arr) => {
  const searchInpt = document.querySelector('.pkmn-search-input')
  const selectType = document.querySelector('.type-select')
  const cardsContainer = document.querySelector('.pkdx-cards-container')
  let filteredArr = []

  const search = () => {
    if (selectType.value === 'all') {
      filteredArr = arr.filter((pokemon) => {
        const { name } = pokemon
        return name.includes(searchInpt.value)
      })

      cleanContainer(cardsContainer)
      renderResult(filteredArr, 'Upps! Pokemon not found.', cardsContainer)
      cardEvent(arr)
    } else {
      filteredArr = filterByName(arr, searchInpt.value)
      filteredArr = filterByType(filteredArr, selectType.value)

      cleanContainer(cardsContainer)
      renderResult(filteredArr, 'Upps! Pokemon not found.', cardsContainer)
      cardEvent(arr)
    }
  }

  searchInpt.addEventListener('input', search)
  selectType.addEventListener('change', search)
}

const filterByName = (arr, value) => {
  return arr.filter((pokemon) => {
    const { name } = pokemon
    return name.includes(value)
  })
}

const filterByType = (arr, value) => {
  return arr.filter((pokemon) => {
    const { types } = pokemon
    const pkmnTypes = types.map((type) => type.type.name)
    return pkmnTypes.includes(value)
  })
}

const renderResult = (arr, text, element) => {
  arr.length > 0 ? showPokemons(arr) : show404(element, text)
}

export const showPokemons = (arr) => {
  arr.forEach((item) => PkmnCard(item))
}

const show404 = (element, text) => {
  element.innerHTML += `<p>${text}</p>`
}

const cardEvent = (arr) => {
  console.log('dentro')
  const heroContainer = document.querySelector('.pkdx-hero-container')
  const cardsNode = document.querySelectorAll('.pkmn-card')

  cardsNode.forEach((card) => {
    card.addEventListener('click', () => {
      const cardId = card.dataset.num
      cleanContainer(heroContainer)
      PkmnHero(arr[cardId - 1])
    })
  })
}
