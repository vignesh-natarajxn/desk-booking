import React from "react";
import Card from "../UI/Card";

import "./Desk.css";

const Desk = (props) => {
  const bookingHandler = () => {
    props.onBooking(props.name);
  };
  const favoriteHandler = () => {
    props.onFavorite(props.name);
  }

  return (
    <div>
      {props.bookingStatus === true &&
      <Card className="desk-booked">
        <div>{props.name}</div>
        <div>Booked</div>
        <button onClick={favoriteHandler}>Fav</button>
        {props.favorite ? <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg' height={15} width={15} />
        : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/129px-Whitestar_black.svg.png' height={15} width={15}/>}
        {props.userSelection === true && <img src='https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg' height={15} width={15} />}
      </Card>}
      {props.bookingStatus === false && <Card className="desk">
      <div>{props.name}</div>
      <div>Unbooked</div>
      <button onClick={bookingHandler}>Book Desk</button>
      <button onClick={favoriteHandler}>Fav</button>
      {props.favorite ? <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg' height={15} width={15} />
        : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/129px-Whitestar_black.svg.png' height={15} width={15}/>}
        {props.userSelection === true && <img src='https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg' height={15} width={15} />}
      </Card>}
    
    </div>
  );
};

export default Desk;

