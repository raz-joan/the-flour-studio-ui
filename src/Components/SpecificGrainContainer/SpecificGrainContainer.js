import React from 'react'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewContainer from '../ReviewContainer/ReviewContainer'

const SpecificGrainContainer = ({ reviews }) => {
    return (
        <div className='specific-grain-container'>
            <SpecificGrainInfo />
            <ReviewForm />
            <ReviewContainer reviews={ reviews }/>
        </div>
    )
}

export default SpecificGrainContainer