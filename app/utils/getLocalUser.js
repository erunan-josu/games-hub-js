export const getLocalUser = () => {
  return JSON.stringify(localStorage.getItem('user'))
}
