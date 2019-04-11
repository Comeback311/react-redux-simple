import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import Routes from './routes';

import './styles/reset.scss';
import './styles/global.scss';

const store = createStore(rootReducer);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
};
