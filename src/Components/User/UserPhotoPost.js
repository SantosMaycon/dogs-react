import React from 'react'
import { PHOTO_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import styles from './UserPhotoPost.module.css'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = React.useState({})
  const { loading, error, request } = useFetch()
  
  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()

    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    console.log(formData)
    await request(url, options)
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animaLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...nome}/>
        <Input label="Peso" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <input className={styles.file} type="file" id="img" name="img" onChange={handleImgChange}/>
        { loading ? <Button disabled >Postando...</Button> : <Button>Postar</Button>}
        <Error error={error}/>
      </form>
      <div>
        { img.preview && 
        <div 
        className={styles.preview} 
        style={{backgroundImage: `url('${img.preview}')`}}
        ></div> }
      </div>
    </section>
  )
}

export default UserPhotoPost
