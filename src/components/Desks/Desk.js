import React from "react";
import Card from "../UI/Card";

import "./Desk.css";

const Desk = (props) => {
  const bookingHandler = () => {
    props.onBooking(props.name);
  };
  const favoriteHandler = () => {
    props.onFavorite(props.name);
  };
  const cancelHandler = () => {
    props.onCancel(props.name);
  };

  return (
    <div>
      {props.bookingStatus === true && (
        <Card className="desk-booked">
          <div>{props.name}</div>
          <div>Booked</div>
          <div>
            <button onClick={favoriteHandler}>Fav</button>
            {props.favorite ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg"
                alt='some value'
                height={15}
                width={15}
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/129px-Whitestar_black.svg.png"
                alt='some value'
                height={15}
                width={15}
              />
            )}
            {props.userSelection === true && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
                alt='some value'
                height={15}
                width={15}
              />
            )}
          </div>
          {props.user === "floor manager" && (
            <div>
              <button onClick={cancelHandler}>Cancel Booking</button>
            </div>
          )}
        </Card>
      )}
      {props.bookingStatus === false && (
        <Card className="desk">
          <div>{props.name}</div>
          <div>Unbooked</div>
          <div>
            <button onClick={favoriteHandler}>Fav</button>
            {props.favorite ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg"
                alt='some value'
                height={15}
                width={15}
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/129px-Whitestar_black.svg.png"
                alt='some value'
                height={15}
                width={15}
              />
            )}
          </div>
          <div>
            {props.j === 0 ? (
              <button onClick={bookingHandler}>Book Desk</button>
            ) : (
              <div>Booking Unavailable</div>
            )}
          </div>
          {props.userSelection === true && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
              alt='some value'
              height={15}
              width={15}
            />
          )}
        </Card>
      )}
    </div>
  );
};

export default Desk;
