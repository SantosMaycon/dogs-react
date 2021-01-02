import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if(login) return <Navigate to="/conta" />
  else if(!login)  return (
      <section className={styles.login}>
        <div className={styles.form}>
          <Outlet />
        </div>
      </section>
    )
}

export default Login
