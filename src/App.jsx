import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'
import useCotizadorProvider from './hooks/useCotizadorProvider'
import CotizadorProvider from './Context/CotizadorProvider'

function App() {
  

  return (
    <>
      <CotizadorProvider>
      <header>Cotiza criptomoneda al instante</header>
      <div className='flex justify-center gap-40'>
        <div>Imagen de la izquierda</div>
        <div><Formulario /></div>


      </div>
      </CotizadorProvider>


    </>
  )
}

export default App
