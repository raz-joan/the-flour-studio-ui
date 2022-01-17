import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'
import seed from '../../Assets/seed.png'

const Header = () => {

    const navigate = useNavigate()

    return (
        <header>
            <div className='title-icon-container'>
                <h1 className='header-title'>THE FLOUR STUDIO</h1>
                <img src={ seed } alt='black and white image of a single grain seed' className='header-seed-icon'/>
            </div>
            <nav>
                <button className='nav-button' onClick={ () => navigate('/') }>Home</button>
                <button className='nav-button' onClick={ () => navigate('/grains') }>Grains</button>
            </nav>
        </header>
    )
}

export default Header