import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()


  function handleSubmit(event) {
    event.preventDefault();

    if ( username.validate() && password.validate() ){
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.value, password: password.value}),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          console.log(json.token);
          return json;
        });
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
