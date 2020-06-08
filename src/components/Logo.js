import React from 'react'
import logo from '../img/logo.png'

function Logo() {
    return (
        <div className="header__logo">
			<a href="../">
                <img src={logo} alt="logo" />
			</a>
		</div>
    )
}

export default Logo