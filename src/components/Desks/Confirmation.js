import Card from "../UI/Card";
import '../../App.css'


const Confirmation = (props) => {
  const BOOKED_SLOTS = props.slots.filter(
    (slot) => slot.userSelection === true
  );

  console.log(BOOKED_SLOTS);

  return <Card className='App'><h1>The Desks have been booked sucessfully!</h1></Card>;
};

export default Confirmation;
