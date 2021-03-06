import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SpecificGrainContainer.scss'
import SpecificGrainInfo from '../SpecificGrainInfo/SpecificGrainInfo'
import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewContainer from '../ReviewContainer/ReviewContainer'
import apiCalls from '../../apiCalls'

const SpecificGrainContainer = () => {

    const { id } = useParams()
    const [grain, setGrain] = useState({})
    const [reviews, setReviews] = useState([])
    const [fetchError, setFetchError] = useState('')
    const [reviewError, setReviewError] = useState('')

    const postNewReview = (newReview) => {
        apiCalls.postReview(newReview)
            .then(data => {
                if (!data.newReview) {
                    setReviewError('Review was unable to post, please try again.')
                }
            })
            .then(() => {
                apiCalls.getData('https://stormy-chamber-80110.herokuapp.com/api/v1/reviews')
                    .then(data => {
                        if (data.reviews) {
                            setReviews(data.reviews)
                        } else {
                            setReviewError('Reviews are unavailable ... unable to connect to the server!')
                        }
                    })
            })
    }

    useEffect(() => {
        apiCalls.getData(`https://stormy-chamber-80110.herokuapp.com/api/v1/grains/${id}`)
            .then(data => {
                if (data.item) {
                    setGrain(data.item)
                } else {
                    setFetchError('404: Looks like what you are looking for does not exist!')
                }
            })
        apiCalls.getData('https://stormy-chamber-80110.herokuapp.com/api/v1/reviews')
            .then(data => {
                if (data.reviews) {
                    setReviews(data.reviews)
                } else {
                    setReviewError('Reviews are unavailable ... unable to connect to the server!')
                }
            })
    }, [])

    return (
        <>
            { fetchError ? <p className='fetch-error-message'>{ fetchError }</p> :
            <div className='specific-grain-container'>
                { !grain.name ? <p className='fetch-error-message'>LOADING ...</p> :
                <>
                    <SpecificGrainInfo grain={ grain } />
                    <ReviewForm grainName={ grain.name } postNewReview={ postNewReview } />
                    <ReviewContainer grainName={ grain.name } reviews={ reviews } reviewError={ reviewError } />
                </>
                }
            </div>
            }
        </>
    )
}

export default SpecificGrainContainer