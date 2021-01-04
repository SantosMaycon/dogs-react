import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import LoginForm from './Components/Login/LoginForm'
import LoginCreate from './Components/Login/LoginCreate'
import LoginPasswordLost from './Components/Login/LoginPasswordLost'
import LoginPasswordReset from './Components/Login/LoginPasswordReset'
import { UserStorage } from './UserContext';
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Feed from './Components/Feed/Feed'
import UserPhotoPost from './Components/User/UserPhotoPost'
import UserStats from './Components/User/UserStats'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} > 
              <Route path="/" element={<LoginForm />} />
              <Route path="/criar" element={<LoginCreate />} />
              <Route path="/perdeu" element={<LoginPasswordLost />} />
              <Route path="/resetar" element={<LoginPasswordReset />} />
            </Route>
            <ProtectedRoute path="/conta" element={<User />} >
              <Route path="/" element={<Feed />} />
              <Route path="/postar" element={<UserPhotoPost />} />
              <Route path="/estatisticas" element={<UserStats />} />
            </ProtectedRoute>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
