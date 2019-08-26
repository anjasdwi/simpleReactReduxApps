import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem'

test('Should render Expenselist Item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
