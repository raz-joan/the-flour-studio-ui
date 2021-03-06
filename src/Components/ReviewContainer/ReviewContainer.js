import React from 'react'
import PropTypes from 'prop-types'
import './ReviewContainer.scss'
import Review from '../Review/Review'

const ReviewContainer = ({ reviews, grainName, reviewError }) => {
    
    const customerReviews = reviews.reduce((matchedReviews, review) => {
        if (grainName === review.name) {
            matchedReviews.push(<Review key={ review.id } review={ review } />)
        }
        return matchedReviews
    }, [])

    return (
        <section className='review-container'>
            <h3 className='review-container-title'>Reviews . . .</h3>
            { reviewError && <p className='review-error-message'>{ reviewError }</p>}
            { customerReviews.length ? customerReviews :
                <div className='review-container-no-reviews'>
                    <h4 className='review-container-no-reviews-msg'>No reviews at this time for this grain.</h4>
                </div>
            }
        </section>
    )
}

export default ReviewContainer

ReviewContainer.propTypes = {
    reviews: PropTypes.array.isRequired,
    grainName: PropTypes.string.isRequired,
    reviewError: PropTypes.string.isRequired
}