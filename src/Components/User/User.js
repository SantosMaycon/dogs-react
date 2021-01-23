import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from '../User/UserPhotoPost'
import UserStats from '../User/UserStats';
import NotFound from '../NotFound'
import Head from '../Helper/Head'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>  
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
