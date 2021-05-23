import React from 'react'
import gunguys from '../../src/image/gunguys.jpg'

function Photo() {
    return (
        <div className="photo-box">
            <img src={gunguys} className="rounded float-end title-image" alt="GUN GUYS"></img>
        </div>
    )
}

export default Photo
