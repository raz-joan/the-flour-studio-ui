import React from 'react'
import './SpecificGrainInfo.scss'
import wheat from '../../Assets/wheat.png'

const SpecificGrainInfo = () => {
    return (
        <section className='grain-info-container'>
            <div className='grain-info-title-image-container'>
                <h2 className='grain-info-title'>GRAIN NAME</h2>
                <img src={wheat} alt='image of an brass bowl holding both grain and flour' className='grain-info-img' />
                <p className='grain-info-scroll'>Scroll to leave a review and/or to read reviews.</p>
            </div>
            <article className='grain-info-card'>
                <p className='grain-info-detail'>Classification: " "</p>
                <p className='grain-info-detail'>Protein: " " %</p>
                <p className='grain-info-detail'>Grown in: " "</p>
                <p className='grain-info-detail'>Organic?: " "</p>
                <p className='grain-info-detail'>Flavor: " " and Texture: " "</p>
                <p className='grain-info-detail'>Baking Characteristics: It can be used in most all baking applications in both bread and pastry.</p>
                <p className='grain-info-detail'>History: This all purpose flour was roller milled and sifted by Heartland Mill in Marienthal, KS. It is unmalted and contains only heirloom Turkey Red wheat, which is the variety brought to Kansas by Mennonite immigrants in the early 1870s. It is wheat from a single field on a single farm, hence the protein percentage and other qualities may vary from lot to lot as is normal for any natural product.</p>
            </article>
        </section>
    )
}

export default SpecificGrainInfo