import './style.css'

export const PkmnSearchbar = (pokemons) => {
  const searchbar = `
      <input class='pkmn-search-input' placeholder='Search Pokemon'>
      <select name='pokemon-type' class='type-select'></select>
    `
  console.log(document.querySelector('.pkdx-searchbar-container'))
  document.querySelector('.pkdx-searchbar-container').innerHTML += searchbar

  const types = getTypes(pokemons)
  types.forEach((type) => {
    const option = `<option value='${type}'>${type}</option>`
    document.querySelector('.type-select').innerHTML += option
  })
}

const getTypes = (arr) => {
  const typesArray = ['all']
  arr.forEach((pkmn) => {
    const { types } = pkmn
    if (typesArray.includes(types[0].type.name)) return
    typesArray.push(types[0].type.name)
  })
  return typesArray
}
