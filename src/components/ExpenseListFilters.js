import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
    
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({ calendarFocused }));
        
    }
    render() {
        console.log(this.props.filters.startDate)
        return  (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    this.props.setTextFilter(e.target.value)
                }}/>
                <select value={this.props.filters.sortBy}
                onChange={(e)=> {
                    if (e.target.value === 'date') {
                        this.props.sortByDate();
                    }else if (e.target.value === 'amount') {
                        this.props.sortByAmount();
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId={"start"}
                endDateId={"end"}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                showClearDates={true}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=> false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
  });
  
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default  connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);