import React from 'react'
import './ReviewContainer.scss'
import Review from '../Review/Review'

const ReviewContainer = ({ reviews }) => {
    
    const customerReviews = reviews.map(review => <Review review={ review }/>)

    return (
        <section className='review-container'>
            <h3 className='review-container-title'>Reviews . . .</h3>
            { customerReviews.length ? customerReviews :
                <div className='review-container-no-reviews'>
                    <h4 className='review-container-no-reviews-msg'>No reviews at this time for this grain.</h4>
                </div>
            }
        </section>
    )
}

export default ReviewContainer