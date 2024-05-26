import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import { PrivateRoute } from './components/PrivateRoute'



function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path="login" element={<Login />} />
			<Route element={<PrivateRoute />}>
				<Route path="/" element={<Main />}/>
			</Route>
		</Routes>
		{/* {isAuthenticated ? null : <Navigate to="/login" state={{ from: location }} replace/>} */}
	</BrowserRouter>
  )
}

export default App
