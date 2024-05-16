import { FC } from "react"

const AuthPage: FC = () => {

	return(
		<div className="auth__wrapper flex">
			<img className="auth__bg" src="/public/bg-auth.jpg" alt="" />
			<div className="template__wrapper section">
				<h2 className="auth__title">Simple Hotel Check</h2>
				<form className="auth__form flex" action="">
					<label className="auth__label label" htmlFor="authLogin">Логин</label>
					<input className="auth__input input" id="authLogin" type="email" />
					<label className="auth__label label" htmlFor="authPswd">Пароль</label>
					<input className="auth__input input" id="authPswd" type="password" />
					<button className="button">Войти</button>
				</form>
			</div>
		</div>
	)
}

export default AuthPage