import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 123123, name: "Shopping", cost: 50 },
        { id: 123123, name: "Holiday", cost: 300 },
        { id: 123123, name: "Transportation", cost: 70 },
        { id: 123123, name: "Fuel", cost: 100 },
        { id: 123123, name: "Groceries", cost: 300 },
    ]

    return(
        <ul className='list-group'>
            {expenses.map((expenses)=>(
                <ExpenseItem 
                id={expenses.id} 
                name={expenses.name} 
                cost={expenses.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;