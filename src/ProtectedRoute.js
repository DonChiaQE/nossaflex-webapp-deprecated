import { Redirect, Route } from "react-router-dom"
import { useAuth } from "./AuthContext"

export function ProtectedRoute({ path, children }) {
	const [user, dispatch] = useAuth()

	if (!user.isAuthenticated) {
		return <Redirect to="/login" />
	}
	return <Route path={path}>{children}</Route>
}