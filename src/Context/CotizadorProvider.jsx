import { createContext } from "react";
import { useState, useEffect } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {


    const [valor, setValor] = useState('');
    const [criptos, setCriptos] = useState([]);
    const [selectCripto, setSelectCripto] = useState('');

    async function topCriptos() {

        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map( cripto => {
            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objeto

        })
        setCriptos(arrayCriptos)
        
    }

    
    useEffect( () => {

        return  topCriptos
        
        ;
    }, []);

  return (
    <CotizadorContext.Provider
        value={{
            valor,
            setValor,
            criptos,
            setSelectCripto,
            selectCripto
        }}
    >
        {children}
    </CotizadorContext.Provider>



  )
}

export {
    CotizadorContext
}

export default CotizadorProvider