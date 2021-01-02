import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { data } = React.useContext(UserContext)

  if(data){
    return <Navigate to="/conta" />
  } 
  else{
    return (
      <div>
        <Outlet />
      </div>
    )
  }
}

export default Login
