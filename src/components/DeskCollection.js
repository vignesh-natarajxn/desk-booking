import React from "react";
import Desk from "./Desk";

import "./DeskCollection.css";

const DeskCollection = (props) => {
  const bookingHandler = (name) => {
    props.onBooking(name);
  };

  return (
    <ul className="desk-collection">
      {props.slots.map((desk) => (
        <Desk
          key={desk.id}
          name={desk.name}
          bookingStatus={desk.bookingStatus}
          onBooking={bookingHandler}
        />
      ))}
    </ul>
  );
};

export default DeskCollection;
