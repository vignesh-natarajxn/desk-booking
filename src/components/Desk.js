import React from "react";
import Card from "./UI/Card";

import "./Desk.css";

const Desk = (props) => {
  const bookingHandler = () => {
    props.onBooking(props.name);
  };

  return (
    <Card className="desk">
      <div>{props.name}</div>
      <div>{props.bookingStatus ? "Booked" : "Unbooked"}</div>
      <button onClick={bookingHandler}>Book Desk</button>
    </Card>
  );
};

export default Desk;
