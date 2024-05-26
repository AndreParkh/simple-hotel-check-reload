import { FC } from "react"
import { useDispatch } from "react-redux"

import LogOutSVG from "../../../assets/LogOytSVG/LogOutSVG"
import { setAuthentication } from "../../../Redux/hotels/hotelSlice"

import './Header.css'

const Header: FC = () => {

	const dispatch = useDispatch()

	return (
		<header className="header flex">
			<h1 className="header__title">Simple Hotel Check</h1>
			<div className="header__logout" onClick={() => dispatch(setAuthentication(false))}>
				Выйти
				<LogOutSVG />
			</div>
		</header>
	)
}

export default Header