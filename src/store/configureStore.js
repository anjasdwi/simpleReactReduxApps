import { createStore, combineReducers } from 'redux';
import expensesReduce from '../reducers/expenses'
import filterReduce from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
             expenses: expensesReduce,
             filters: filterReduce
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

     return store;
}