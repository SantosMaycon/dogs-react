import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';


export const UserContext= React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navagate = useNavigate()

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json();
    setData(json)
    setLoading(true)
    console.log(json)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({ username, password })
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText} / erro interno no servidor`)        
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      console.log(json);
      await getUser(json.token);
      setLogin(true)
      navagate('/conta')
    } catch (erro) {
      setError(erro.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = React.useCallback( async function () {
    setData(null)
    setError(null)
    setLogin(false)
    window.localStorage.removeItem('token')
    navagate('/login')
  }, [navagate])
  
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if(token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  return <UserContext.Provider value={{ userLogin, userLogout, data, login, loading, error }} >{children}</UserContext.Provider>
}
