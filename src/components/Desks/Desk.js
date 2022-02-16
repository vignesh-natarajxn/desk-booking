import React from "react";
import Card from "../UI/Card";

import "./Desk.css";

const Desk = (props) => {
  const bookingHandler = () => {
    props.onBooking(props.name);
  };

  return (
    <div>
      {props.bookingStatus ?
      <Card className="desk-booked">
        <div>{props.name}</div>
        <div>Booked</div>
        <button onClick={bookingHandler}>Book Desk</button>
      </Card>
      : <Card className="desk">
      <div>{props.name}</div>
      <div>Unbooked</div>
      <button onClick={bookingHandler}>Book Desk</button>
    </Card>
      }
    </div>
  );
};

export default Desk;
