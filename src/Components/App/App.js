import React, { useEffect, useState } from "react"
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'
import GrainCardsContainer from '../GrainCardsContainer/GrainCardsContainer'
import SpecificGrainContainer from '../SpecificGrainContainer/SpecificGrainContainer'

const App = () => {

    const [ grains, setGrains ] = useState([])
    const [ reviews, setReviews ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/grains')
            .then(res => res.json())
            .then(data => {
                setGrains(data)
            })
        fetch('http://localhost:3000/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='body-container'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={ <Welcome /> }/>
                    <Route path='/grains' element={ <GrainCardsContainer grains={grains} /> }/>
                    <Route path='/grains/:id' element={ <SpecificGrainContainer reviews={reviews} /> } />
                </Routes>
            </main>
            {/* <Footer /> */}
        </div>
        )
}

export default App