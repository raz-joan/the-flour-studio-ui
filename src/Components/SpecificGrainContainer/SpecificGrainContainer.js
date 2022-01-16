import React, { useEffect, useState } from 'react'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewContainer from '../ReviewContainer/ReviewContainer'

const SpecificGrainContainer = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='specific-grain-container'>
            <SpecificGrainInfo />
            <ReviewForm />
            <ReviewContainer reviews={ reviews }/>
        </div>
    )
}

export default SpecificGrainContainer