import React from "react"
import './App.scss'
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'
import GrainCardsContainer from '../GrainCardsContainer/GrainCardsContainer'

const App = () => {
    return (
        <div className='body-container'>
            <Header />
            <main>
                <Welcome />
                <GrainCardsContainer />
            </main>
            {/* <Footer /> */}
        </div>
        )
}

export default App