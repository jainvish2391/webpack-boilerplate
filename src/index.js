import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/app'

//import 'fontsource-roboto'

import { Provider } from 'react-redux'
import configureStore from './store'

reactDOM.render(
	<Provider store={configureStore()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)