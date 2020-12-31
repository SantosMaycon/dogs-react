import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin, getUser, data } = React.useContext(UserContext)

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if(token) getUser(token);
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();

    if ( username.validate() && password.validate() ){
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Login" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="criar">Cadastrar</Link>
    </section>
  )
}

export default LoginForm
