import React from 'react'
import './GrainCard.scss'

const GrainCard = () => {
    return (
        <article className='grain-card'>
            <div className='color-circle'></div>
            <h2 className='grain-card-title'>GRAIN NAME</h2>
            <p className='grain-card-info'>Classification</p>
            <p className='grain-card-info'>Price / lb</p>
            <p className='grain-card-info'>Availability</p>
        </article>
    )
}

export default GrainCard