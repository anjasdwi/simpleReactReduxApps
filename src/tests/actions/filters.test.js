import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should setup add expense action object with default value', ()=> {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate: moment(0)
    });
})


test('should setup add expense action object with default value', ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate: moment(0)
    });
})


test('should setup add expense action object with default value', ()=> {
    const text = "Something in";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text
    });
})


test('should setup add expense action object with default value', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text: ''
    });
})


test('should setup add expense action object with default value', ()=> {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
})

test('should setup add expense action object with default value', ()=> {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
})