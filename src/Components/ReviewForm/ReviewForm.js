import React from 'react'
import './ReviewForm.scss'

const ReviewForm = () => {
    return (
        <form className='review-form'>
            <h3 className='review-form-title'>Leave a Review!</h3>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-name'>The name that you would like to appear on the review: </label>
                <input className='review-input' id='customer-name' type='text' />
            </div>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-rating'>Your rating from 1 to 5 (low to high): </label>
                <input className='review-input' id='customer-rating' type='number' min='1' max='5' step='1'/>
            </div>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-note'>What would you like to share with other grain enthusiasts? </label>
                <textarea className='review-text-area' id='customer-note'></textarea>
            </div>
            <div className='review-button-container'>
                <button className='review-form-button'>Submit my Review!</button>
            </div>
        </form>
    )
}

export default ReviewForm