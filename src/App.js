import "./App.css";
import React, { useState } from "react";
//import BookingUI from "./components/BookingUI";
import DeskCollection from "./components/DeskCollection";
import Card from "./components/UI/Card";
import "./components/BookingUI.css";

const SLOT_DETAILS = [
  {
    id: "d1",
    name: "Desk 1",
    bookingStatus: true,
  },
  {
    id: "d2",
    name: "Desk 2",
    bookingStatus: false,
  },
  {
    id: "d3",
    name: "Desk 3",
    bookingStatus: false,
  },
  {
    id: "d4",
    name: "Desk 4",
    bookingStatus: false,
  },
  {
    id: "d5",
    name: "Desk 5",
    bookingStatus: false,
  },
  {
    id: "d6",
    name: "Desk 6",
    bookingStatus: false,
  },
  {
    id: "d7",
    name: "Desk 7",
    bookingStatus: false,
  },
  {
    id: "d8",
    name: "Desk 8",
    bookingStatus: false,
  },
  {
    id: "d9",
    name: "Desk 9",
    bookingStatus: false,
  },
  {
    id: "d10",
    name: "Desk 10",
    bookingStatus: false,
  },
  {
    id: "d11",
    name: "Desk 11",
    bookingStatus: false,
  },
  {
    id: "d12",
    name: "Desk 12",
    bookingStatus: false,
  },
  {
    id: "d13",
    name: "Desk 13",
    bookingStatus: false,
  },
  {
    id: "d14",
    name: "Desk 14",
    bookingStatus: false,
  },
  {
    id: "d15",
    name: "Desk 15",
    bookingStatus: false,
  },
  {
    id: "d16",
    name: "Desk 16",
    bookingStatus: false,
  },
  {
    id: "d17",
    name: "Desk 17",
    bookingStatus: false,
  },
  {
    id: "d18",
    name: "Desk 18",
    bookingStatus: false,
  },
  {
    id: "d19",
    name: "Desk 19",
    bookingStatus: false,
  },
  {
    id: "d20",
    name: "Desk 20",
    bookingStatus: false,
  },
];

const App = () => {
  const bookingHandler = (name) => {
    console.log(name);
  };

  // const [expenses, setExpenses] = useState(SLOT_DETAILS);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  //   //setExpenses([expense, ...expenses])
  // };

  return (
    <Card className="booking-ui">
      <DeskCollection slots={SLOT_DETAILS} onBooking={bookingHandler} />
    </Card>
  );
};

export default App;
