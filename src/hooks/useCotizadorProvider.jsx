import { useContext } from "react";
import CotizadorProvider from "../Context/CotizadorProvider";
import { CotizadorContext } from "../Context/CotizadorProvider";


const useCotizadorProvider = () => {
 
    return (
    useContext(CotizadorContext)
  )
}

export default useCotizadorProvider