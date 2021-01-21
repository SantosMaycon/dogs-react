import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({user, page, setInfinite, setModalPhoto}) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page , total, user });
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total ) {
        console.log('Ativou essa merda de infinite = false')
        setInfinite(false);
      }
      console.log(json)
    } fetchPhotos();
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data) {
    return (
      <ul className={`${styles.feed} animaLeft`}>
        { data.map( (photo) => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} /> ) }
      </ul>
    )
  } else {
    return <h1>Voltou nada</h1>
  }
}

export default FeedPhotos
