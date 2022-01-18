import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './GrainCard.scss'

const GrainCard = ({ grain }) => {

    const navigate = useNavigate()
    let hasGlutenColor = grain.hasGluten ? 'blue' : 'gold'
    let inStockColor = grain.inStock ? 'green' : 'red'
    let inStockText = grain.inStock ? 'In Stock' : 'Out of Stock'

    return (
        <article className='grain-card' key={ grain.id }>
            <div className={ `color-circle-${ hasGlutenColor }` }></div>
            <h2 className='grain-card-title'>{ grain.name }</h2>
            <p className='grain-card-info'>{ grain.classification }</p>
            <p className='grain-card-info'>${ grain.pricePerLb } / lb</p>
            <p className='grain-card-info' className={ inStockColor }>{ inStockText }</p>
            <button className='grain-card-button' onClick={ () => navigate(`/grains/${ grain.id }`) }>See Grain Details</button>
        </article>
    )
}

export default GrainCard

GrainCard.propTypes = {
    grain: PropTypes.object.isRequired
}