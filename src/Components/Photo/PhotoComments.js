import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = ({id, comments, single}) => {
  const [_comments, set_Comments] = React.useState(() => comments)
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  },[_comments])

  return (
    <>
      <ul className={`${styles.comments} ${single ? styles.single : ''}`} ref={commentsSection}>
        {_comments.map((comment) => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li> )}
      </ul>
      { login && <PhotoCommentsForm id={id} setComments={set_Comments} single={single} /> }
    </>
  )
}

export default PhotoComments
