import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.scss'
import eightyFiveMill from '../../Assets/eightyFiveMill.png'
import redHandleScoop from '../../Assets/redHandleScoop.png'
import oaxacanWhole from '../../Assets/oaxacanWhole.png'
import oaxacanGround from '../../Assets/oaxacanGround.png'
import woodenMill from '../../Assets/woodenMill.png'

const Welcome = () => {

    const navigate = useNavigate()
    const millDescription = 'We are both a bakery and a mill. Our choices are entirely guided by a desire to nourish our neighbors and foster community. Our mission at the mill is to support local and regional farmers who use organic and regenerative farming practices and to provide better access to stone ground, whole grain flours from known sources to local restaurants, bakeries, and food makers. Community not commodity! This mill is a 501c3 non profit.'

    return (
        <div className='welcome-container'>
            <section className='scroll-picture-section'>
                <img className='corn-image' src={ oaxacanWhole } alt='picture of whole kernel green corn'/>
                <img className='corn-image wooden-mill' src={ woodenMill } alt='picture of a wooden stone mill with corn flour pouring out of its spout'/>
                <img className='corn-image' src={ oaxacanGround } alt='picture of ground green corn flour'/>
            </section>
            <section className='mill-description-section'>
                <article className='description-article'>
                    <p className='mill-description'>{ millDescription }</p>
                    <button className='view-grains-button' onClick={ () => navigate('/grains') }>View our Grains!</button>
                </article>
                <div className='image-container'>
                    <img className='miller-image' src={ eightyFiveMill } alt='picture of the miller loading the hopper of the stone mill with grain'/>
                    <img className='scoop-of-grain-image' src={ redHandleScoop } alt='picture of a scoop of wheat berries' />
                    <div className='red-block-image'></div>
                </div>
            </section>
        </div>
    )
}

export default Welcome