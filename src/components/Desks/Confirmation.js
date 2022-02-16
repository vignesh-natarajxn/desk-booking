import Card from "../UI/Card";



const Confirmation = (props) => {
    const BOOKED_SLOTS = props.slots.map((slot) => 
    slot.userSelection === true && [props.name, ...BOOKED_SLOTS])

    console.log(BOOKED_SLOTS)

    return (
        <Card>The Desks have been booked sucessfully!</Card>
    )
}

export default Confirmation;