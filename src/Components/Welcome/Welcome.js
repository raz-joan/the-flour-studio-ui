import React from 'react'
import './Welcome.scss'
import eightyFiveMill from '../../Assets/eightyFiveMill.png'
import redHandleScoop from '../../Assets/redHandleScoop.png'
import oaxacanWhole from '../../Assets/oaxacanWhole.png'
import oaxacanGround from '../../Assets/oaxacanGround.png'
import woodenMill from '../../Assets/woodenMill.png'

const Welcome = () => {
    const millDescription = 'We are both a bakery and a mill. Our choices are entirely guided by a desire to nourish our neighbors and foster community. Our mission at the mill is to support local and regional farmers who use organic and regenerative farming practices and to provide better access to stone ground, whole grain flours from known sources to local restaurants, bakeries, and food makers. Community not commodity! This mill is a 501c3 non profit.'

    return (
        <div>
            <section>
                <article>
                    <p>{millDescription}</p>
                    <button>View our Grains!</button>
                </article>
                <div>
                    <img src={eightyFiveMill} alt='picture of the miller loading the hopper of the stone mill with grain'/>
                    <img src={redHandleScoop} alt='picture of a scoop of wheat berries'/>
                </div>
            </section>
            <section>
                <img src={oaxacanWhole} alt='picture of whole kernel green corn'/>
                <img src={oaxacanGround} alt='picture of ground green corn flour'/>
                <img src={woodenMill} alt='picture of a wooden stone mill with corn flour pouring out of its spout'/>
            </section>
        </div>
    )
}

export default Welcome