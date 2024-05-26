import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { FC } from "react";

export const PrivateRoute: FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.hotels.isAuthenticated)

  return (
	<>
	  {isAuthenticated === true
		? <Outlet />
		: <Navigate to="/login" replace />}
	</>
  )
};