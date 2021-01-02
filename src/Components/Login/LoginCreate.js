import React from 'react'
import { USER_POST } from '../../api'
import '../../App.css'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)

  async function handleSubmit(event) {
    const body = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    console.log(body)

    event.preventDefault()
    if ( username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST(body)

      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
      await userLogin(username.value, password.value)
    }
  }
  
  return (
    <section className="animaLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" autocomplete="on" {...password}/>
        <Button>Cadastrar</Button>
        <Error />
      </form>
    </section>
  )
}

export default LoginCreate
