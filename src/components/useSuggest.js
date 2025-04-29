import { useContext } from "react"
import SuggestContext from "./SuggestProvider"


const useSuggest = () => {
    return useContext(SuggestContext)
}

export default useSuggest


