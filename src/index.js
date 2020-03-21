import React from 'react';
// import {combineReducers} from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducer from './redux/reducer';
// import reducer2 from './redux/reducer2';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import Login from './pages/Login/Login';
import api from './redux/api'

// const rootReducer = combineReducers({
// 	reducer,
// 	// reducer2
// })

const store = createStore(reducer,applyMiddleware(api));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={App} exact />
        </Router>
    </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
