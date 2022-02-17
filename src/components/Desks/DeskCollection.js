import React from "react";
import Desk from "./Desk";
import Card from "../UI/Card";

import "./DeskCollection.css";

const DeskCollection = (props) => {
  const bookingHandler = (name) => {
    props.onBooking(name);
  };
  const favoriteHandler = (name) => {
    props.onFavorite(name);
  };
  const cancelHandler = (name) => {
    props.onCancel(name);
  }

  return (
    <div>
      <h2>Book your Desks here</h2>
      <ul className="desk-collection">
        {props.slots.map((desk) => (
          <Desk
            key={desk.id}
            name={desk.name}
            user={props.user}
            bookingStatus={desk.bookingStatus}
            userSelection={desk.userSelection}
            favoriteStatus={desk.favorite}
            onFavorite={favoriteHandler}
            onBooking={bookingHandler}
            onCancel={cancelHandler}
          />
        ))}
      </ul>
      {props.user === "floor manager" && <Card></Card>}
    </div>
  );
};

export default DeskCollection;
