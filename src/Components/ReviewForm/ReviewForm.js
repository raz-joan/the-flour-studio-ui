import React, { useState } from 'react'
import './ReviewForm.scss'

const ReviewForm = ({ grainName, postNewReview }) => {

    const [userName, setUserName] = useState('')
    const [userRating, setUserRating] = useState('')
    const [userNote, setUserNote] = useState('')
    const [inputError, setInputError] = useState(false)

    const todaysDate = new Date().toISOString().slice(0, 10).replaceAll("-", "/")

    const submitReview = (event) => {
        event.preventDefault()
        if (userName && userRating && userNote) {
            const newReview = {
                name: grainName,
                customerName: userName,
                date: todaysDate,
                rating: userRating,
                note: userNote
            }
            postNewReview(newReview)
            clearInputs()
        } else {
            setInputError(true)
        }
    }

    const clearInputs = () => {
        setUserName('')
        setUserRating('')
        setUserNote('')
        if (inputError) {
            setInputError(false)
        }
    }

    return (
        <form className='review-form'>
            <h3 className='review-form-title'>Leave a Review!</h3>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-name'>The name that you would like to appear on the review: </label>
                <input className='review-input' id='customer-name' type='text' value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-rating'>Your rating from 1 to 5 (low to high): </label>
                <input className='review-input' id='customer-rating' type='number' min='1' max='5' step='1' value={userRating} onChange={(event) => setUserRating(event.target.value)}/>
            </div>
            <div className='review-form-label-input-container'>
                <label className='review-label' htmlFor='customer-note'>What would you like to share with other grain enthusiasts? </label>
                <textarea className='review-text-area' id='customer-note' value={userNote} onChange={(event) => setUserNote(event.target.value)}></textarea>
            </div>
            <div className='review-button-container'>
                <button className='review-form-button' onClick={(event) => submitReview(event) }>Submit my Review!</button>
                { inputError && <p className='input-error-message'>All three questions require an answer to submit a review.</p>}
            </div>
        </form>
    )
}

export default ReviewForm