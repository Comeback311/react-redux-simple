import React from 'react';
import Header from './components/Header/container';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import Auth from './components/Auth/container';

const store = createStore(rootReducer);

const Users = () => (
	<React.Fragment>
		<Header />
		<div>Users</div>
		<Link to='/'>Назад</Link>
	</React.Fragment>
)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path='/' component={Auth} />
						<Route path='/users' component={Users} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
};
