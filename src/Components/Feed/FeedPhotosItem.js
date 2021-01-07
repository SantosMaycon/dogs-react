import React from 'react'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  const { src, title, acessos } = photo

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick} >
      <img src={src} alt={title}/>
      <span className={styles.visualizacao}>{acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
