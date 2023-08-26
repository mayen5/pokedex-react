import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PokemonProvider } from './context/PokemonProvider'
import { AppRouter } from './AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </>
  )
}

export default App
