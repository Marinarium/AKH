import React from 'react'

function MainMenu() {
    return (
        <div className="header__mobile">
			<div className="header__nav">
				<ul>
                    <li><a href="./" class="link-main">Главная</a></li>
					<li><a href="./" class="link-profile">Профиль</a></li>
					<li><a href="./" class="link-employees active">Сотрудники</a></li>
					<li><a href="./" class="link-groups">Группы терминалов</a></li>
					<li><a href="./" class="link-terminals">Терминалы</a></li>
					<li><a href="./" class="link-settings">Настройки</a></li>
				</ul>
			</div>
		</div>
    )
}

export default MainMenu