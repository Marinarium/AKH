import React from 'react'
import Logo from '../components/Logo'
import GuestMenu from '../components/GuestMenu'
import BurgerMenu from '../BurgerMenu'

function MainNavigation() {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <GuestMenu />
                <BurgerMenu />
            </div>
		</div>
    )
}

export default MainNavigation