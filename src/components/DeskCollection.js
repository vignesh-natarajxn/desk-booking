import React from "react";
import Desk from "./Desk";

import "./DeskCollection.css"

const DeskCollection = (props) => {

  return (
    <ul className="desk-collection">
      {props.slots.map((desk) => (
        <Desk 
        key={desk.id}
        name={desk.name}
        bookingStatus={desk.bookingStatus} />
      ))}
    </ul>
  );
};

export default DeskCollection;
