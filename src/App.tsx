import React, { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Filter from './components/Filter'
import Porlets from './components/Porlets'
import AppContext from './context/AppContext'

function App() {

  return (
    <div>
      <h1>sistema</h1>
      <AppContext>
        <Banner/>
        <Filter/>
        <Porlets/>
      </AppContext>


    </div>
  )
}

export default App
