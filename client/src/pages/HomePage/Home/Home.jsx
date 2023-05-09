/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Home.module.css'

const Home = ({students}) => {
  return (
      <main className={styles["homepage-container"]}> {students[0].name} </main>
  )
}

export default Home