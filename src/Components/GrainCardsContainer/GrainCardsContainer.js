import React from 'react'
import { Link } from 'react-router-dom'
import './GrainCardsContainer.scss'
import GrainCard from '../GrainCard/GrainCard'

const GrainsContainer = ({ grains }) => {
    
    const grainCards = grains.map(grain => {
        return (
            <Link to={`/grains/${grain.id}`} key={ grain.id }>
                <GrainCard grain={grain} />
            </Link>
        )
    })

    return (
        <div className='container-view'>
            <div className='color-match-container'>
                <div className='single-match-container'>
                    <div className='color-circle-with'></div>
                    <p className='gluten-state-tag'>Grains WITH Gluten</p>
                </div>
                <div className='single-match-container'>
                    <div className='color-cirlce-without'></div>
                    <p className='gluten-state-tag'>Grains WITHOUT Gluten</p>
                </div>
            </div>
            <section className='grain-grid-container'>
                { grainCards }
            </section>
        </div>
    )
}

export default GrainsContainer