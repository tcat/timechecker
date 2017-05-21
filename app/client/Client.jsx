import "../resources/scss/app.scss"
import React from 'react'
import ReactDOM from 'react-dom'
import ClientRouter from './ClientRouter.jsx'
import { AppContainer } from 'react-hot-loader';

let rootEl = document.getElementById('app')
ReactDOM.render(
	<ClientRouter/>,
	 rootEl
);

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept('./ClientRouter.jsx', function () {
	// Require the new version and render it instead
	var NextApp = require('./ClientRouter.jsx').default
	ReactDOM.render(<NextApp />, rootEl)
  })
}

/*window.onload = () => {
	ReactDOM.render(
		AppRouter,
		document.getElementById('app')
	);
};*/
