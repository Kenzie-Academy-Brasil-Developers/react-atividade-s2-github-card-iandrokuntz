

const Card = ({api, setApi}) => {


    const handleClean = (repositories) => {

        return setApi(api.filter((item) => item !== repositories))
    }

    

    return(
        <div>
            {api.map((item,index) => (
                <div key={index}>
                    <h2>{item.data.full_name}</h2>
                    <p>{item.data.description}</p>
                    <button onClick={() => handleClean(item)}>Clean repositories</button>
                </div>
            ))}
        </div>
    
    )
}

export default Card