import './style.css'
import { PkmnCard } from '../../components/Pokedex/PkmnCard/PkmnCard'
import { getPokemons } from '../../services/pokemon/getPokemons'
import { cleanContainer } from '../../utils/cleanContainer'
import { PkmnSearchbar } from '../../components/Pokedex/PkmnSearchbar/PkmnSearchbar'

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

  showPokemons(pokemonsData)

  search(pokemonsData)
}

const search = (arr) => {
  let pokemons = [...arr]
  const searchBtn = document.querySelector('.pkmn-search-input')

  searchBtn.addEventListener('input', () => {
    const newPokemons = arr.filter((pokemon) => {
      const { name } = pokemon
      return name.includes(searchBtn.value)
    })
    pokemons = newPokemons

    const cardsContainer = document.querySelector('.pkdx-cards-container')
    cleanContainer(cardsContainer)
    newPokemons.length > 0
      ? showPokemons(pokemons)
      : show404(cardsContainer, 'Uppss!! Pokemon not found')
  })

  searchByType(pokemons)
}

const searchByType = (arr) => {
  const select = document.querySelector('.type-select')
  select.addEventListener('change', (e) => {
    const newPokemons = arr.filter((pokemon) => {
      const { types } = pokemon
      return types[0].type.name === select.value
    })
    const cardsContainer = document.querySelector('.pkdx-cards-container')
    cleanContainer(cardsContainer)
    newPokemons.length > 0
      ? showPokemons(newPokemons)
      : show404(cardsContainer, 'Uppss!! Pokemon not found')
  })
}

export const showPokemons = (arr) => {
  arr.forEach((item) => PkmnCard(item))
}

const show404 = (element, text) => {
  element.innerHTML += `<p>${text}</p>`
}
