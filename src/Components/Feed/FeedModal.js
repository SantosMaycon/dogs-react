import React from 'react'
import { PHOTO_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'
import styles from './FeedModal.module.css'

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET(photo.id)
      request(url, options)
    } fetchPhotos()
  },[photo, request])


  function closeModal(event) {
    if(event.target === event.currentTarget)
      setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={closeModal}>
      { error && <Error error={error} /> }
      { loading && <Loading /> }
      { data && <PhotoContent data={data} /> }
    </div>
  )
}

export default FeedModal
