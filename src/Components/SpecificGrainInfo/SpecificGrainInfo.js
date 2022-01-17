import React from 'react'
import PropTypes from 'prop-types'
import './SpecificGrainInfo.scss'
import wheat from '../../Assets/wheat.png'

const SpecificGrainInfo = ({ grain }) => {

    let protein = grain.protein === 'N/A' ? 'N/A' : (grain.protein + '%')
    let organicStatus = grain.isOrganic ? 'Yes' : 'No'

    return (
        <section className='grain-info-container'>
            <div className='grain-info-title-image-container'>
                <h2 className='grain-info-title'>{ grain.name }</h2>
                <img src={ wheat } alt='image of a brass bowl holding both grain and flour' className='grain-info-img' />
                <p className='grain-info-scroll'>Scroll to leave a review and/or to read reviews.</p>
            </div>
            <article className='grain-info-card'>
                <p className='grain-info-detail'>Classification: <span className='grain-info-bold'>{ grain.classification }</span></p>
                <p className='grain-info-detail'>Protein: <span className='grain-info-bold'>{ protein }</span></p>
                <p className='grain-info-detail'>Organic?: <span className='grain-info-bold'>{ organicStatus }</span>, Grown in: <span className='grain-info-bold'>{ grain.grownIn }</span></p>
                <p className='grain-info-detail'>Flavor: <span className='grain-info-bold'>{ grain.flavor }</span></p>
                <p className='grain-info-detail'>Texture: <span className='grain-info-bold'>{ grain.texture }</span></p>
                <p className='grain-info-detail'>Baking Characteristics: <span className='grain-info-bold'>{ grain.bakingCharacteristics }</span></p>
                <p className='grain-info-detail'>History: <span className='grain-info-bold'>{ grain.history }</span></p>
            </article>
        </section>
    )
}

export default SpecificGrainInfo

SpecificGrainInfo.propTypes = {
    grain: PropTypes.object.isRequired
}