import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import getVisibleExpense from './selectors/expenses'
import { setTextFilter } from './actions/filters'
import './style/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

// import 'normalize.css'
const store = configureStore();
console.log('testagain');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));