import React from "react";
import DeskCollection from "./DeskCollection"
import Card from "./UI/Card";

import "./BookingUI.css"

const BookingUI = (props) => {
    
    return (
        <Card className='booking-ui'>
            <DeskCollection />
        </Card>
    );
};


export default BookingUI