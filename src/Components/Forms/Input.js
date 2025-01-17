import React from 'react'
import Error from '../Helper/Error'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur, ...props}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} {...props}/>
      <Error error={error} />
    </div>
  )
}

export default Input
