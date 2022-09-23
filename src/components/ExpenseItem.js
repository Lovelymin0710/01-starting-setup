import './ExpenseItem.css';


function ExpenseItem() {

    const expenseDate = new Date(2022,2,24);
    const EXPENSE_TITLE = 'Car Insurance';
    const expenseAmount = 294.67;


    return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{EXPENSE_TITLE} </h2>
        <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
