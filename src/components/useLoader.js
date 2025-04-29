import { useContext } from "react"
import LoaderContext from "./LoaderProvider"


const useLoader = () => {
    return useContext(LoaderContext)
}

export default useLoader