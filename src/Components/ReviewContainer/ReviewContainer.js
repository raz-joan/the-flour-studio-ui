import React from 'react'
import './ReviewContainer.scss'
import Review from '../Review/Review'

const ReviewContainer = () => {
    let reviews = []
    for (let i = 0; i < 4; i++) {
        reviews.push(<Review />)
    }

    return (
        <section className='review-container'>
            <h3 className='review-container-title'>Reviews . . .</h3>
            {reviews.length ? reviews :
                <div className='review-container-no-reviews'>
                    <h4 className='review-container-no-reviews-msg'>No reviews at this time for this grain.</h4>
                </div>
            }
        </section>
    )
}

export default ReviewContainer