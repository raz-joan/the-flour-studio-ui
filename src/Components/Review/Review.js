import React from 'react'
import './Review.scss'

const Review = () => {
    return (
        <div className='customer-review'>
            <h4 className='customer-review-title'>"CustomerName" gave this grain a rating of "Number" on "Date"</h4>
            <p className='customer-review-note'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default Review