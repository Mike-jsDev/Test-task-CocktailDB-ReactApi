import React from 'react'
import './header.scss'
import logo from '../../assets/images/drink.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <h1 className='header-logo-title'>Coctails DB</h1>
                <img className='header-logo-img' src={logo}/>
            </div>
        </header>
    )
}

export default Header