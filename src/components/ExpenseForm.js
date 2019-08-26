import React from 'react';
// import 'react-dates/initialize'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css'


// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

class ExpenseFrom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calFocused : false,
            error : ''
        };
        // console.log(props.expense ? (props.expense.amount / 100).toString() : '');
    }
    
    onDescription = (e) => {
        const description = e.target.value;
        this.setState(()=> ({ description }))
    }

    onNote = (e) => {
        const note = e.target.value;
        this.setState(()=> ({ note }))
    }

    onAmount = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(()=> ({ amount }));
        }
    }

    onDate = (createdAt) => {
        if (createdAt) {
            this.setState(() =>({ createdAt }) )
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(()=> ({calFocused: focused}));
    }

    onSubmit= (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>({ error : 'Mohon lengkapi description and amount'}));
        } else {
            this.setState(()=> ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            // console.log(this.state);
        }
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange= {this.onDescription}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={this.onAmount}
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDate} 
                    focused={this.state.calFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea
                    placeholder="Add your Note"
                    value={this.state.note}
                    onChange= {this.onNote}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseFrom