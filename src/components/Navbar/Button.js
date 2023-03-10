import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Button.module.css'
const Button = () => {

  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate("/sign-in")
  }
  return (
    <div className={styles.data_container}>
    <span className={styles.btn} onClick={handleLoginClick}>Login</span>
    </div>
  )
}

export default Button