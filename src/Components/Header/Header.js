import React from 'react'
import './Header.scss'
import seed from '../../Assets/seed.png'

const Header = () => {
    return (
        <header>
            <div>
                <h1>THE FLOUR STUDIO</h1>
                <img src={seed} alt='black and white image of a single grain seed'/>
            </div>
            <div>
                <nav>
                    <button>Grains</button>
                    <button>About</button>
                </nav>
            </div>
        </header>
    )
}

export default Header