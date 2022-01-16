import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GrainCard.scss'

const GrainCard = ({ grain }) => {

    const navigate = useNavigate()
    let inStockColor = grain.inStock ? 'green' : 'red'

    return (
        <article className='grain-card' key={ grain.id }>
            <div className='color-circle'></div>
            <h2 className='grain-card-title'>{ grain.name }</h2>
            <p className='grain-card-info'>{ grain.classification }</p>
            <p className='grain-card-info'>${ grain.pricePerLb } / lb</p>
            <p className='grain-card-info' className={inStockColor}>{grain.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <button className='grain-card-button' onClick={() => navigate(`/grains/${grain.id}`)}>See Grain Details</button>
        </article>
    )
}

export default GrainCard