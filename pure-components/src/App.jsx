import { PureComponent, useState } from 'react'
import './App.css'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'

function App() {

  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent />
    </>
  )
}

export default App
