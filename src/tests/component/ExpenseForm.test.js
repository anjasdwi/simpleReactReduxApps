import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses';
import moment from 'moment'

test('Should render ExpenselistForm with', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render ExpenselistForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render error for invalid from submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('Should set description on input change', ()=>{
    const value = 'description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
})

test('Should set description on input change', ()=>{
    const value = 'New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
})

test('Should set amount if valid input', ()=>{
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('Should set description on input change', ()=>{
    const value = '12.1';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})


test('Should call onsubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
       description: expenses[0].description,
       amount: expenses[0].amount,
       note: expenses[0].note,
       createdAt: expenses[0].createdAt
    });
})


test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    // console.log(cek)
    expect(wrapper.state('createdAt')).toEqual(now);
  });
  
//   test('should set calendar focus on change', () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
//     expect(wrapper.state('calendarFocused')).toBe(true);
//   });