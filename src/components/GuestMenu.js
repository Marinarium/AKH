import React from 'react'

function GuestMenu() {
    return (
        <div className="header__mobile">
			<div className="header__nav">
				<ul>
					<li><a href="./" className="link-auth active">Вход на сайт</a></li>
					<li><a href="./" className="link-registration">Регистрация</a></li>
				</ul>
			</div>
		</div>
    )
}

export default GuestMenu