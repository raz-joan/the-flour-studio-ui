import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewContainer from '../ReviewContainer/ReviewContainer'
import apiCalls from '../../apiCalls'

const SpecificGrainContainer = () => {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [grain, setGrain] = useState({})

    const postNewReview = (newReview) => {
        // fetch('http://localhost:3000/api/v1/reviews', {
        //     method: "POST",
        //     body: JSON.stringify(newReview),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .then(() => {
        //         fetch('http://localhost:3000/api/v1/reviews')
        //             .then(res => res.json())
        //             .then(data => setReviews(data))
        //     })
        apiCalls.postReview(newReview)
            .then(() => {
                apiCalls.getData('http://localhost:3000/api/v1/reviews')
                    .then(data => setReviews(data))
            })
    }

    useEffect(() => {
        // fetch('http://localhost:3000/api/v1/reviews')
        //     .then(res => res.json())
        apiCalls.getData('http://localhost:3000/api/v1/reviews')
            .then(data => setReviews(data))
        // fetch(`http://localhost:3000/api/v1/grains/${id}`)
        //     .then(res => res.json())
        apiCalls.getData(`http://localhost:3000/api/v1/grains/${id}`)
            .then(data => setGrain(data))
    }, [])

    return (
        <div className='specific-grain-container'>
            <SpecificGrainInfo grain={ grain }/>
            <ReviewForm grainName={ grain.name } postNewReview={ postNewReview }/>
            <ReviewContainer grainName={ grain.name } reviews={ reviews }/>
        </div>
    )
}

export default SpecificGrainContainer