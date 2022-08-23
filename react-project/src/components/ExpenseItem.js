import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiDelete } from 'react-icons/ti';


const ExpenseItem = (props) => {
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge bg-primary bg-pill mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;