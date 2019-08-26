import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses';

test('Should render Expenselist with', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render Expenselist with', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
