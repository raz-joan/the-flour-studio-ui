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
    const [fetchError, setFetchError] = useState('')

    const postNewReview = (newReview) => {
        apiCalls.postReview(newReview)
            .then(() => {
                apiCalls.getData('http://localhost:3000/api/v1/reviews')
                    .then(data => setReviews(data))
            })
    }

    useEffect(() => {
        apiCalls.getData('http://localhost:3000/api/v1/reviews')
            .then(data => {
                if (data[0]) {
                    setReviews(data)
                } else {
                    setFetchError('Oops ... unable to connect to the server!')
                }
            })
        
        apiCalls.getData(`http://localhost:3000/api/v1/grains/${id}`)
            .then(data => {
                if (data.id) {
                    setGrain(data)
                } else {
                    setFetchError('Oops ... unable to connect to the server!')
                }
            })
    }, [])

    return (
        <>
            { fetchError ? <p className = 'fetch-error-message'>{ fetchError }</p> :
            <div className='specific-grain-container'>
                <SpecificGrainInfo grain={grain} />
                <ReviewForm grainName={grain.name} postNewReview={postNewReview} />
                <ReviewContainer grainName={grain.name} reviews={reviews} />
            </div>
            }
        </>
    )
}

export default SpecificGrainContainer