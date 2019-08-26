import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

export class ExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <div></div>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
            

const mapDispatchToProps = (dispatch) => ({
        onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(ExpensePage);

  