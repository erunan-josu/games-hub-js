export const getPokemons = async () => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  const pokemonLimit = 151
  const myData = []
  for (let i = 1; i <= pokemonLimit; i++) {
    const data = await fetch(`${baseUrl}${i}`)
    const dataJSON = await data.json()
    const { id, name, sprites, stats, types, weight, height, order } = dataJSON

    const customData = {
      id,
      order,
      name,
      sprites: {
        common: sprites.front_default,
        shiny: sprites.front_shiny,
      },
      stats,
      types,
      weight: weight / 10,
      height: height / 10,
    }

    myData.push(customData)
  }

  return myData
}
