import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItinerary } from '../../store/itineraries';


const CreateFlightForm = ({ setShowModal, itinerary_id }) => {
    // const itinerary_id = useSelector(state => state.itineraries[0])
    const dispatch = useDispatch();
    console.log("******************")
    console.log(itinerary_id, "this is from the create flight form")

    const [date, setDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [airline, setAirline] = useState('')
    const [flight_no, setFlight_no] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const flight = { itinerary_id, date, origin, destination, departure, arrival, airline, flight_no, notes }
        // console.log(flight)

        const res = await fetch(`/api/flights/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flight)
        });
        if (res.ok) {
            console.log("RES IS OOKAYDAOKAYYYY", res.ok)
            const data = await res.json();
            console.log("AWAIT RES.JSONNNN OKAYYYYYDOKAYYY ", data)

            await dispatch(getItinerary(itinerary_id));
            // dispatch(createFlight(data));
            setShowModal(false)
            return 'success';
        }

        // if (success) {
        //     setShowModal(false)
        // }
    };

    return (
        <>
            <div className="flight-form__container">
                <form className="flight-form" onSubmit={handleSubmit}>
                    <label>
                        Date
                    </label>
                    <input type="date" value={date} placeholder="Trip Date" onChange={(e) => setDate(e.target.value)} />
                    <label>
                        Origin
                    </label>
                    <input type="string" value={origin} placeholder="Origin" onChange={(e) => setOrigin(e.target.value)} />
                    <label>
                        Destination
                    </label>
                    <input type="string" value={destination} placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
                    <label>
                        Departure
                    </label>
                    <input type="string" value={departure} placeholder="Departure" onChange={(e) => setDeparture(e.target.value)} />
                    <label>
                        Arrival
                    </label>
                    <input type="string" value={arrival} placeholder="Arrival" onChange={(e) => setArrival(e.target.value)} />
                    <label>
                        Airline
                    </label>
                    <input type="string" value={airline} placeholder="Airline" onChange={(e) => setAirline(e.target.value)} />
                    <label>
                        Flight No.
                    </label>
                    <input type="string" value={flight_no} placeholder="Flight No." onChange={(e) => setFlight_no(e.target.value)} />
                    <label>
                        Notes
                    </label>
                    <input type="text" value={notes} placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
                    <button type="submit">New Flight</button>
                </form>
            </div>
        </>
    )
}



export default CreateFlightForm;
