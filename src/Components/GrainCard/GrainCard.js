import React from 'react'
import './GrainCard.scss'

const GrainCard = ({ grain }) => {

    let inStockColor = grain.inStock ? 'green' : 'red'

    return (
        // <article className='grain-card'>
        //     <div className='color-circle'></div>
        //     <h2 className='grain-card-title'>GRAIN NAME</h2>
        //     <p className='grain-card-info'>Classification</p>
        //     <p className='grain-card-info'>Price / lb</p>
        //     <p className='grain-card-info'>Availability</p>
        // </article>
        <article className='grain-card' key={ grain.id }>
            <div className='color-circle'></div>
            <h2 className='grain-card-title'>{ grain.name }</h2>
            <p className='grain-card-info'>{ grain.classification }</p>
            <p className='grain-card-info'>${ grain.pricePerLb } / lb</p>
            <p className='grain-card-info' className={ inStockColor }>{ grain.inStock ? 'In Stock' : 'Out of Stock' }</p>
        </article>
    )
}

export default GrainCard