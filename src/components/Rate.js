import React from 'react'

function Rate({rate}) {
    const rating=[1,2,3,4,5]
    return (
        <div className="Rate">
            {rating.map((el)=>el<=rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>) }
        </div>
    )
}

export default Rate
