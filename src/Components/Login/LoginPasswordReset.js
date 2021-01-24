import React from 'react'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm()
  const { loading, error, request } = useFetch()
  const navagate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])
  
  
  async function handleSubmit(event) {
    event.preventDefault()
    
    const { url, options } = PASSWORD_RESET({
      key,
      login,
      password: password.value
    })
    
    const { response } = await request(url, options)
    if (response.ok ) navagate('/login')
  }
  
  return (
    <section className="animaLeft">
      <Head title="Resetar Senha" description="" />
      <h1 className="title">Reset a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        { loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button> }
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
