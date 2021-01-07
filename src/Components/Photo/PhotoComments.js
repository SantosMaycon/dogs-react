import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = ({id, comments}) => {
  const [_comments, set_Comments] = React.useState(() => comments)
  const { login } = React.useContext(UserContext)

  return (
    <>
      <ul className={styles.comments}>
        {_comments.map((comment) => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li> )}
      </ul>
      { login && <PhotoCommentsForm id={id} setComments={set_Comments} /> }
    </>
  )
}

export default PhotoComments
