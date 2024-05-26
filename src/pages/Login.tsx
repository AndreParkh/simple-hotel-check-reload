import { FC, useState } from "react"
import { useDispatch } from "react-redux"

import { setAuthentication } from "../Redux/hotels/hotelSlice"

import '../css/LoginPage.css'
import { useNavigate } from "react-router-dom"

const Login: FC = () => {

	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	const [emailErr, setEmailErr] = useState(' ')
	const [passwordErr, setPasswordErr] = useState(' ')
	
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const emailHandler = (event: any) => {
		const regExp = new RegExp("^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$")
		const isValid = regExp.test(event.target.value )
		if (isValid && event.target.value.length > 0 ) {
			setEmailErr('')
		} else (
			setEmailErr('Невалидный email')
		)
	}
	const passwordHandler = (event: any) => {
		const isValid = event.target.value.length > 8
		if (isValid) {
			setPasswordErr('')
		} else (
			setPasswordErr('Недостаточная длина пароля')
		)
	}

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		if (emailErr == '' && passwordErr == ''){
			dispatch(setAuthentication(true))
			navigate('/', { replace: true });
		}
	}

	// onClick={() => navigate('two', { replace: false })}>

	return(
		<div className="login__wrapper flex">
			<img className="login__bg" src="/public/bg-auth.jpg" alt="" />
			<div className="template__wrapper section">
				<h2 className="login__title">Simple Hotel Check</h2>
				<form className="login__form flex" action="">
					<label className="login__label label flex">
						Логин
						<input 
							className="login__input input" 
							id="authLogin" 
							type="email"
							onChange={(e) => emailHandler(e)} />
					</label>
					<p className="loginerr err_email">{emailErr}</p>
					<label className="login__label label flex">
						Пароль
						<input 
							className="login__input input" 
							id="authPswd" 
							type="password"
							onChange={(e) => passwordHandler(e)} />
					</label>
					<p className="login_err err_password">{passwordErr}</p>
					<button 
						className="button" 
						onClick = {(e) => {
							onClickHandler(e)
						}}>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login