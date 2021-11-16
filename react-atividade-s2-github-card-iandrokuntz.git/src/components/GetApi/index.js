import { useState } from "react"
import axios from "axios"


const GetApi = ({api, setApi}) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)


    const handleClean = () => {

        setInput("")
        setError(false)
    }

    const getFromApi = () => {

        axios.get(`https://api.github.com/repos/${input}`).then((response) => {
            setError(false);
            setApi([...api, response]);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      }

    return(
        <div>
                <input placeholder="Ex.: owner/repository_name" onChange={(evt) => setInput(evt.target.value)} value={input}/>
                {error && <span> Repository not found</span>}
                <button onClick={getFromApi}>Search</button>
                <button onClick={handleClean}>Clean Filter</button>
        </div>

    )
}

export default GetApi