import React from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import { UserContext } from '../../UserContext'
import styles from './PhotoContent.module.css'
import PhotoDelete from './PhotoDelete'
import Image from '../Helper/Image'

function PhotoContent({ data, single }) {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}> 
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            { !user.data ? <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> : 
            ( user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> ) }
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  )
}

export default PhotoContent
