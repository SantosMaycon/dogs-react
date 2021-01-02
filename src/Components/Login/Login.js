import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const { data } = React.useContext(UserContext)

  if(data){
    return <Navigate to="/conta" />
  } 
  else{
    return (
      <section className={styles.login}>
        <div className={styles.form}>
          <Outlet />
        </div>
      </section>
    )
  }
}

export default Login
