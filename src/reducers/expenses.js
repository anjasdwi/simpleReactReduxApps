const expensesReduceDefaultState = [];

const expensesReduce = (state = expensesReduceDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expenses]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}; 

export default expensesReduce;