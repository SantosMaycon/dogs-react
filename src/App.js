import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Photo from './Components/Photo/Photo'
import Login from './Components/Login/Login'
import LoginForm from './Components/Login/LoginForm'
import LoginCreate from './Components/Login/LoginCreate'
import LoginPasswordLost from './Components/Login/LoginPasswordLost'
import LoginPasswordReset from './Components/Login/LoginPasswordReset'
import { UserStorage } from './UserContext';
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="/login" element={<Login />} > 
                <Route path="/" element={<LoginForm />} />
                <Route path="/criar" element={<LoginCreate />} />
                <Route path="/perdeu" element={<LoginPasswordLost />} />
                <Route path="/resetar" element={<LoginPasswordReset />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <ProtectedRoute path="/conta/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
