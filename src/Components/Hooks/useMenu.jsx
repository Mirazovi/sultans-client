import axios from "axios"
import { useState } from "react"
const useMenu = ()=>{
    
    const [menu,setMenu] = useState([])
    const [loading,setLoading] = useState(true)

    axios.get('http://localhost:5000/menu')
    .then(res => {
        setMenu(res.data);
        setLoading(false)
    })
    return [menu,loading]
}
export default useMenu