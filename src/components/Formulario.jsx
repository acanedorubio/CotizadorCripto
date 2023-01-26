import React from 'react'
import useCotizadorProvider from '../hooks/useCotizadorProvider'
import { useState } from 'react'

const Formulario = () => {

    const { valor , setValor, criptos, setSelectCripto,selectCripto } = useCotizadorProvider()
    const [datos, setDatos] = useState({});
    


    async function valorar() {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectCripto}&tsyms=${valor}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setDatos(resultado.DISPLAY[selectCripto][valor])
        console.log(datos)
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        valorar()
    }

  return (
    <>
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label>Elige tu moneda</label>
                <select
                    className='w-full'
                    onChange={(e) => {
                        setValor(e.target.value)
                    }}
                >
                    <option>-- Selecciona una moneda --</option>
                    <option value="USD">Dolar Americano</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div>
                <label>Elige tu criptomoneda</label>
                <select
                    className='w-full'
                    onChange={(e) => setSelectCripto(e.target.value)}
                >
                <option>-- Selecciona una CriptoMoneda --</option>
                {criptos.map(cripto => (
                    <option value={cripto.id}>{cripto.nombre}</option>
                ))}
                </select>
            </div>
            <input
                type="submit"
                value="Cotizar ahora"
            />


        </form>
        {datos ? (
            <div>
                <h2>Cotización</h2>
                <p>Precio : {datos.PRICE}</p>
                <p>Precio Max: {datos.HIGH24HOUR}</p>
                <p>Precio Min: {datos.LOW24HOUR}</p>
            </div>

        ): null}
        
    </>
  )
}

export default Formulario