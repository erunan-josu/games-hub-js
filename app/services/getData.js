export const getData = async (param) => {
  const data = await fetch(`http://localhost:3000/${param}`)
  const dataJSON = await data.json()
  return dataJSON
}
