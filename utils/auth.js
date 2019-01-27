import jwtDecode from 'jwt-decode'

export const setToken = token => {
  window.localStorage.setItem('lokkerToken', token)
  window.localStorage.setItem('lokkerUser', JSON.stringify(jwtDecode(token)))
}

export const unsetToken = () => {
  window.localStorage.removeItem('lokkerToken')
  window.localStorage.removeItem('lokkerUser')
  window.localStorage.setItem('lokkerLogout', Date.now())
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.lokkerToken || undefined
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.lokkerUser
  return json ? JSON.parse(json) : undefined
}
