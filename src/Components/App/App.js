import React from "react"
import './App.scss'
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'
import GrainsContainer from '../GrainsContainer/GrainsContainer'

const App = () => {
    return (
        <div className='body-container'>
            <Header />
            <main>
                <Welcome />
                <GrainsContainer />
            </main>
            {/* <Footer /> */}
        </div>
        )
}

export default App