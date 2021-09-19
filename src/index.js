import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import HeaderPage from './components/header/HeaderPage'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route path='/header' component={HeaderPage} />
        </Switch> */}
      <App />
    </ConnectedRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
