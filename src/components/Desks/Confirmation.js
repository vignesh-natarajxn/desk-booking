import Card from "../UI/Card";



const Confirmation = (props) => {
    const BOOKED_SLOTS = props.slots.filter((slot) => slot.userSelection === true )

    console.log(BOOKED_SLOTS)

    return (
        <Card>The Desks have been booked sucessfully!</Card>
    )
}

export default Confirmation;