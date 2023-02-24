import "../Sass/abstracts/ExpenseForm.scss";

const ExpenseForm = () => {
  const mini = "2023-02-24";
  return (
    <form>
      <div className="new-expense__controls">
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min={mini} />
        </div>
        <div className="n">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
