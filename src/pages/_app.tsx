import '../styles/global.scss'
import '../styles/app.module.scss'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import styles from '../styles/app.module.scss'
import React, { useState } from 'react'
import { PlayerContext, PlayerContextProvider } from '../contexts/PlayersContext'


function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
    <div className={styles.wrapper}>    
      <main>
        <Header />
        <Component {...pageProps} />      
      </main>
      <Player />
     
    </div>
   </PlayerContextProvider>

  )
}

export default MyApp
