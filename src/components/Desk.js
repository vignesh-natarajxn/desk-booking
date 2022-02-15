import React, { useState } from "react";
import Card from "./UI/Card";

import "./Desk.css"

const Desk = (props) => {
    
    const [bookingStatus, setBookingStatus] = useState(props.bookingStatus);


    const bookHandler = () => {
        setBookingStatus(true);
        console.log(bookingStatus);
    }

    return (
        <Card className="desk">
            <div>{props.name}</div>
            <div>{bookingStatus? "Booked" : "Unbooked" }</div>
            <button onClick={bookHandler} >Book Desk</button>
        </Card>
    );
};

export default Desk;