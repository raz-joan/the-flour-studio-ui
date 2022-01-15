import React from 'react'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import Review from '../Review/Review'

const SpecificGrainContainer = () => {
    return (
        <div className='specific-grain-container'>
            <SpecificGrainInfo />
            <ReviewForm />
            <Review />
        </div>
    )
}

export default SpecificGrainContainer