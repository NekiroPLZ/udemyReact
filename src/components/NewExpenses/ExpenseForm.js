import "../Sass/abstracts/ExpenseForm.scss";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  // const mini = "2023-02-24";
  const [valuesInput, setInput] = useState({
    valuesTitle: "",
    valuesAmount: "",
    valuesDate: "",
  });

  const inputTitleHandler = (e) => {
    setInput((val) => {
      return { ...val, valuesTitle: e.target.value };
    });
  };

  const inputAmountHandler = (e) => {
    setInput((val) => {
      return { ...val, valuesAmount: e.target.value };
    });
  };
  const inputDateHandler = (e) => {
    setInput((val) => {
      return { ...val, valuesDate: e.target.value };
    });
  };
  const buttonResultHandler = (e) => {
    e.preventDefault();

    const showData = {
      ...valuesInput,
      date: new Date(valuesInput.valuesDate),
    };
    props.onSaveExpenseData(showData);
    setInput({
      valuesTitle: "",
      valuesAmount: "",
      valuesDate: "",
    });
  };

  return (
    <form onSubmit={buttonResultHandler}>
      <div className="new-expense__controls">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={valuesInput.valuesTitle}
            onChange={inputTitleHandler}
          />
          <p>title</p>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={valuesInput.valuesAmount}
            onChange={inputAmountHandler}
          />
          <p>amount</p>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={valuesInput.valuesDate}
            onChange={inputDateHandler}
          />
          <p>date</p>
        </div>
        <div className="n">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};


export default ExpenseForm;
