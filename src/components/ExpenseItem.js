import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
		toast.success("Item Is Deleted Succesfully");
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>{props.cost} ₹</span>
				<button style={{padding : "1px 10px", borderRadius : "50%"}} onClick={handleDeleteExpense}>x</button>
			</div>
		</li>
	);
};

export default ExpenseItem;
