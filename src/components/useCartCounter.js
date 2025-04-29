import { useContext } from "react"
import CartCounterContext from "./CartCounterProvider"


const useCartCounter = () => {
    return useContext(CartCounterContext)
}

export default useCartCounter