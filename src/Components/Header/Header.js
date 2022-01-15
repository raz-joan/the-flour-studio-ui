import React from 'react'
import './Header.scss'
import seed from '../../Assets/seed.png'

const Header = () => {
    return (
        <header>
            <div className='title-icon-container'>
                <h1 className='header-title'>THE FLOUR STUDIO</h1>
                <img src={seed} alt='black and white image of a single grain seed' className='header-seed-icon'/>
            </div>
            <nav>
                <button className='nav-button'>Home</button>
                <button className='nav-button'>Grains</button>
                <button className='nav-button'>About</button>
            </nav>
        </header>
    )
}

export default Header