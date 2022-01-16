import React from 'react'
import './Review.scss'

const Review = ({ review }) => {
    return (
        <div className='customer-review' key={ review.id }>
            <h4 className='customer-review-title'>{ review.customerName } gave this grain a rating of { review.rating } on { review.date }</h4>
            <p className='customer-review-note'>{ review.note }</p>
        </div>
    )
}

export default Review