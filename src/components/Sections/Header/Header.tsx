import { FC } from "react"
import LogOutSVG from "../../../assets/LogOytSVG/LogOutSVG"

import './Header.css'

const Header: FC = () => {
	return (
		<header className="header flex">
			<h1 className="header__title">Simple Hotel Check</h1>
			<div className="header__logout">
				Выйти
				<LogOutSVG />
			</div>
		</header>
	)
}

export default Header