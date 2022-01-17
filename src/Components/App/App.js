import React, { useEffect, useState } from "react"
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'
import GrainCardsContainer from '../GrainCardsContainer/GrainCardsContainer'
import SpecificGrainContainer from '../SpecificGrainContainer/SpecificGrainContainer'
import apiCalls from "../../apiCalls"

const App = () => {

    const [grains, setGrains] = useState([])
    const [fetchError, setFetchError] = useState('')

    useEffect(() => {
        apiCalls.getData('http://localhost:3000/api/v1/grains')
            .then(data => {
                if (data[0]) {
                    setGrains(data)
                } else {
                    setFetchError('Oops ... unable to connect to the server!')
                }
            })
    }, [])

    return (
        <div className='body-container'>
            <Header />
            <main>
                { fetchError ? <p className='fetch-error-message'>{ fetchError }</p> :                
                <Routes>
                    <Route path='/' element={ <Welcome /> }/>
                    <Route path='/grains' element={ <GrainCardsContainer grains={ grains } /> } />
                    <Route path='/grains/:id' element={ <SpecificGrainContainer /> } />
                    <Route path='/*' element={ <p className='url-path-error-message'>404: Looks like what you are looking for does not exist!</p> }/>
                </Routes>
                }
            </main>
            <Footer />
        </div>
    )
}

export default App