import "../Sass/abstracts/NewExpense.scss";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (dataExpense) => {
    const expenseData = {
      ...dataExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
