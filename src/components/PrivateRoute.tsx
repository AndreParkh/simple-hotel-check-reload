import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { FC } from "react";

export const PrivateRoute: FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.hotels.isAuthenticated)

  const location = useLocation()

  return (
	<>
	  {isAuthenticated === true
		? <Outlet />
		: <Navigate to="/login" state={{ from: location }} replace />}
	</>
  )
};