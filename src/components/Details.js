import React from 'react'
import Rate from './Rate'
function Details({match,movieList,history}) {
    const found = movieList.find((elem) => elem.id == match.params.id)
    return (
        <div>
         <h1>{found.name}</h1> 
         <img src={found.image} width='500' alt={found.name} />
         <div>
             {found.description}
         </div>
         <div>
             {found.type}
         </div>
         <div >
            <Rate rate={found.rating} />
         </div>
         <div>
             {found.trailer}
         </div>
        </div>
    )
}

export default Details
