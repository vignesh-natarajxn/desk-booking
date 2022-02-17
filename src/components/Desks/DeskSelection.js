import React from "react";
import Card from "../UI/Card";
import "./DeskSelection.css";
import SelectedDesk from "./SelectedDesk";
import "../User/User.css";

const DeskSelection = (props) => {
  return (
    <div>
      <Card className="desk-selection">
        <h1>You have selected:</h1>
        {props.slots.map((desk) =>
          desk.userSelection ? (
            <div>
              <SelectedDesk name={desk.name} /> <button>Cancel</button>{" "}
            </div>
          ) : (
            <div></div>
          )
        )}
      </Card>
      <Card className="user">
        <div>
          <h2>Please click 'Confirm' to finalize your booking(s)</h2>
          <button onClick={props.onSubmitHandler}>Confirm</button>
        </div>
      </Card>
    </div>
  );
};

export default DeskSelection;
