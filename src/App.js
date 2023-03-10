import Expenses from "./components/Expenses/Expenses";
import "../src/components/Sass/abstracts/Expenses.scss";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onViewExpenseHandler = (expense) => {
    console.log("I am at app.js");
    console.log(expense);
  };

  return (
    <div className="expenses">
      <NewExpense onAddExpense={onViewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
