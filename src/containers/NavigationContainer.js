import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import BurgerMenu from '../BurgerMenu'

function NavigationContainer() {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Navigation />
                <BurgerMenu />
            </div>
		</div>
    )
}

export default NavigationContainer