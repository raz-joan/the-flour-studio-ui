import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SpecificGrainInfo.scss'
import wheat from '../../Assets/wheat.png'

const SpecificGrainInfo = () => {

    const { id } = useParams()
    const [ grain, setGrain ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/grains/${id}`)
            .then(res => res.json())
            .then(data => {
                setGrain(data)
            })
    }, [])

    return (
        <section className='grain-info-container'>
            <div className='grain-info-title-image-container'>
                <h2 className='grain-info-title'>{ grain.name }</h2>
                <img src={wheat} alt='image of an brass bowl holding both grain and flour' className='grain-info-img' />
                <p className='grain-info-scroll'>Scroll to leave a review and/or to read reviews.</p>
            </div>
            <article className='grain-info-card'>
                <p className='grain-info-detail'>Classification: { grain.classification }</p>
                <p className='grain-info-detail'>Protein: { grain.protein }%</p>
                <p className='grain-info-detail'>Organic?: {grain.isOrganic ? 'Yes' : 'No'}, Grown in: { grain.grownIn }</p>
                <p className='grain-info-detail'>Flavor: {grain.flavor}</p>
                <p className='grain-info-detail'>Texture: { grain.texture }</p>
                <p className='grain-info-detail'>Baking Characteristics: { grain.bakingCharacteristics }</p>
                <p className='grain-info-detail'>History: { grain.history }</p>
            </article>
        </section>
    )
}

export default SpecificGrainInfo