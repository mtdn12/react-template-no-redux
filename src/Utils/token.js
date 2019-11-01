import jwtDecode from 'jwt-decode'
const AUTH_TOKEN = 'auth-template'

/**
|--------------------------------------------------
| Authentication Token
|--------------------------------------------------
*/
const setToken = token => localStorage.setItem(AUTH_TOKEN, token)

const getToken = () => localStorage.getItem(AUTH_TOKEN)

const getTokenData = () => {
  return localStorage.getItem(AUTH_TOKEN)
    ? jwtDecode(localStorage.getItem(AUTH_TOKEN))
    : null
}
const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

export { setToken, getToken, getTokenData, removeToken }
