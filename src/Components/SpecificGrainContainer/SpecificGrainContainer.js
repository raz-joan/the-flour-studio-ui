import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewContainer from '../ReviewContainer/ReviewContainer'

const SpecificGrainContainer = () => {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [grain, setGrain] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
        fetch(`http://localhost:3000/api/v1/grains/${id}`)
            .then(res => res.json())
            .then(data => {
                setGrain(data)
            })
    }, [])

    return (
        <div className='specific-grain-container'>
            <SpecificGrainInfo grain={ grain }/>
            <ReviewForm />
            <ReviewContainer reviews={ reviews }/>
        </div>
    )
}

export default SpecificGrainContainer