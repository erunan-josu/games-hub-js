import './style.css'

export const PkmnHero = (pokemon) => {
  const { name, id, sprites, stats, weight, height } = pokemon
  const hero = `
  <div class='pkmn-container'>
    <img class='pkmn-img' src='${sprites.common}' alt='${name}'>
    <fieldset class='pkmn-details-container'>
        <legend class='legend'>#${id} ${name}</legend>
        <p>weight: ${weight} kg</p>
        <p>height: ${height} m</p>
        <ul class='stats-container'></ul>
    </fieldset>
  </div>
  `
  document.querySelector('.pkdx-hero-container').innerHTML += hero

  stats.forEach((stat) => {
    console.log(stat)
    const li = `
    <li class='stat-container'>
        <span>${stat.stat.name}: </span>
        <input type='range' value='${stat.base_stat}' max='100'>
    </li>`
    document.querySelector('.stats-container').innerHTML += li
  })
}
