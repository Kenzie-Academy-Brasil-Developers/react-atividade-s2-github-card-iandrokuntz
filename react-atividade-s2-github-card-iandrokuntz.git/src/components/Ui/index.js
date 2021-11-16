import Card from "../Card"
import GetApi from "../GetApi"
import { useState } from "react"
import "./style.css"

const Ui = () => {

    const [api, setApi] = useState([])

    return(
        <div>
            <h1>Search the repositories here</h1>
            <GetApi api={api} setApi={setApi}/>
            <Card api={api} setApi={setApi}/>
        </div>

    )
}

export default Ui