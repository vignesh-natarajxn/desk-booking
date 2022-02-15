import './App.css';
import React, { useState } from "react";
import BookingUI from "./components/BookingUI";
//import Expenses from "./components/Expenses/Expenses";

const SLOT_DETAILS = [
  {
    id: "d1",
    name: "Desk 1",
    bookingStatus: true
  },
  {
    id: "d2",
    name: "Desk 2",
    bookingStatus: false
  },
  {
    id: "d3",
    name: "Desk 3",
    bookingStatus: false
  },
  {
    id: "d4",
    name: "Desk 4",
    bookingStatus: false
  },
];

const App = () => {

  // const [expenses, setExpenses] = useState(SLOT_DETAILS);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  //   //setExpenses([expense, ...expenses])
  // };

  return (
    <div>
      <BookingUI slots={SLOT_DETAILS} />
    </div>
  );
};

export default App;

