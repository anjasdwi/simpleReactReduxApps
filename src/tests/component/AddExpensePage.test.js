import React from 'react';
import {  shallow } from 'enzyme';
import { ExpensePage } from '../../components/ExpensePage';
import expenses from '../fixtures/expenses'

test('Harusnya render AddEnpensePage ', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<ExpensePage onSubmit={onSubmit} history={history}/>);
    expect(wrapper).toMatchSnapshot();
});

// test('Harusnya render onSubmit', () => {
//     const onSubmit = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<ExpensePage onSubmit={onSubmit} history={history}/>);
//     wrapper.find('withStyles(ExpenseForm)').prop('onSubmit')(expenses[1]);
//     console.log(wrapper);
//     expect(history.push).toHaveBeenLastCalledwidth('/');
//     expect(onSubmit).toHaveBeenLastCalledwidth(expenses[1]);
// })