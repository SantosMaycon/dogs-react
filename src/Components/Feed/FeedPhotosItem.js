import React from 'react'
import Image from '../Helper/Image'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  const { src, title, acessos } = photo

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick} >
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
