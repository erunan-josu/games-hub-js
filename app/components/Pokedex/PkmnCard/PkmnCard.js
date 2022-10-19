import './style.css'

const typeColors = {
  electric: '#FFEA70',
  normal: '#A3ACAF',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#33B95C',
  psychic: '#F366B9',
  ghost: '#4F2455',
  bug: '#A2FAA3',
  poison: '#B97FC9',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#C94545',
  default: '#2A1A1F',
  fairy: '#FDB9E8',
}

export const PkmnCard = (pokemon) => {
  const { types, id, sprites, name } = pokemon
  const firstType = types[0].type.name

  const pokemonCard = `
    <figure data-num='${id}' class='pkmn-card' style="background: ${typeColors[firstType]}">
        <div class='pkmn-num-container'>
            <p class='pkmn-card-num'># ${id}</p>
        </div>
        <div class='pkmn-img-container'>
            <img class='pkmn-card-img' src='${sprites.common}' alt='${name}'>
        </div>
        <figcaption class='pkmn-card-name'>${name}</figcaption>
    </figure>
    `
  document.querySelector('.pkdx-cards-container').innerHTML += pokemonCard
}
