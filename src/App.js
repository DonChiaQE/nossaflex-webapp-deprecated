import './App.css';
import Database from './views/database';
import { BrowserRouter as Link, Router, Switch, Route, Redirect } from "react-router-dom"
import Login from './views/login';
import SignUp from './views/signup';

export default function App() {
    return (
		<Router>
			<Switch>
			<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	)
}

